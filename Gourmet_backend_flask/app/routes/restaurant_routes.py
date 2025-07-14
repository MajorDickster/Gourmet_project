from flask import Blueprint, jsonify, request
from app.db import get_db
from app.controllers.restaurant_controller import get_menu_for_restaurant
import json
from collections import defaultdict

restaurant_bp = Blueprint('restaurants', __name__)

# --------------------------------------
# GET /restaurants
# --------------------------------------
@restaurant_bp.route('/restaurants', methods=['GET'])
def get_all_restaurants():
    print("📡 /api/restaurants hit")
    conn = get_db()
    if conn is None:
        print("❌ No DB connection")
        return jsonify({"error": "Database connection failed"}), 500

    cur = conn.cursor()
    try:
        query = """
            SELECT
                r.id,
                r.name,
                r.address,
                r.phone_number,
                r.email,
                r.description,
                r.image_url,
                TO_CHAR(r.opening_time, 'HH24:MI') AS opening_time,
                TO_CHAR(r.closing_time, 'HH24:MI') AS closing_time,
                r.is_active,
                ARRAY_AGG(c.name) AS cuisines
            FROM
                restaurants r
            LEFT JOIN
                restaurant_cuisines rc ON r.id = rc.restaurant_id
            LEFT JOIN
                cuisines c ON rc.cuisine_id = c.id
            GROUP BY
                r.id
            ORDER BY
                r.name;
        """
        print("✅ Running restaurant query...")
        cur.execute(query)
        restaurants_data = cur.fetchall()
        print("✅ Query succeeded, formatting data...")

        restaurants = []
        for row in restaurants_data:
            print("⬇️ Row fetched:", row)
            restaurants.append({
                "id": row[0],
                "name": row[1],
                "address": row[2],
                "phone_number": row[3],
                "email": row[4],
                "description": row[5],
                "image_url": row[6],
                "opening_time": row[7],
                "closing_time": row[8],
                "is_active": row[9],
                "cuisines": row[10] if row[10] != [None] else []
            })

        return jsonify(restaurants), 200

    except Exception as e:
        print(f"❌ Error fetching restaurants:\n{e}")
        return jsonify({"error": "Failed to fetch restaurants", "details": str(e)}), 500

    finally:
        cur.close()
        conn.close()



# --------------------------------------
# GET /restaurants/<id>
# --------------------------------------
@restaurant_bp.route('/restaurants/<int:restaurant_id>', methods=['GET'])
def get_restaurant_details(restaurant_id):
    conn = get_db()
    if conn is None:
        return jsonify({"error": "Database connection failed"}), 500

    cur = conn.cursor()
    try:
        query = """
            SELECT
                r.id,
                r.name,
                r.address,
                r.phone_number,
                r.email,
                r.description,
                r.image_url,
                TO_CHAR(r.opening_time, 'HH24:MI') AS opening_time,
                TO_CHAR(r.closing_time, 'HH24:MI') AS closing_time,
                r.is_active,
                ARRAY_AGG(c.name) AS cuisines
            FROM restaurants r
            LEFT JOIN restaurant_cuisines rc ON r.id = rc.restaurant_id
            LEFT JOIN cuisines c ON rc.cuisine_id = c.id
            WHERE r.id = %s
            GROUP BY r.id;
        """
        cur.execute(query, (restaurant_id,))
        row = cur.fetchone()

        if row:
            restaurant = {
                "id": row[0],
                "name": row[1],
                "address": row[2],
                "phone_number": row[3],
                "email": row[4],
                "description": row[5],
                "image_url": row[6],
                "opening_time": row[7],
                "closing_time": row[8],
                "is_active": row[9],
                "cuisines": row[10] if row[10] != [None] else []
            }
            return jsonify(restaurant), 200
        else:
            return jsonify({"message": "Restaurant not found"}), 404

    except Exception as e:
        print(f"Error fetching restaurant details: {e}")
        return jsonify({"error": "Failed to fetch restaurant details"}), 500
    finally:
        cur.close()
        conn.close()



@restaurant_bp.route("/cart/add", methods=["POST"])
def add_to_cart():
    data = request.get_json()
    user_id = data.get("customer_id")
    menu_item_id = data.get("item_id")
    restaurant_id = data.get("restaurant_id")  # 🆕 include this
    quantity = data.get("quantity", 1)

    if not user_id or not menu_item_id or not restaurant_id:
        return jsonify({"error": "user_id, item_id, and restaurant_id are required"}), 400

    conn = get_db()
    cur = conn.cursor()

    try:
        # Ensure menu item exists
        cur.execute("SELECT id FROM menu_items WHERE id = %s", (menu_item_id,))
        if not cur.fetchone():
            return jsonify({"error": "Menu item not found"}), 404

        # Check if already in cart
        cur.execute("""
            SELECT quantity FROM cart_items 
            WHERE user_id = %s AND menu_item_id = %s AND is_active = TRUE
        """, (user_id, menu_item_id))
        existing = cur.fetchone()

        if existing:
            cur.execute("""
                UPDATE cart_items 
                SET quantity = quantity + %s 
                WHERE user_id = %s AND menu_item_id = %s AND is_active = TRUE
            """, (quantity, user_id, menu_item_id))
        else:
            cur.execute("""
                INSERT INTO cart_items (user_id, restaurant_id, menu_item_id, quantity, is_active) 
                VALUES (%s, %s, %s, %s, TRUE)
            """, (user_id, restaurant_id, menu_item_id, quantity))

        conn.commit()
        return jsonify({"message": "Cart updated"}), 200

    except Exception as e:
        conn.rollback()
        print("❌ Error adding to cart:", e)
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        conn.close()




@restaurant_bp.route("/cart/<int:user_id>", methods=["GET"])
def get_cart(user_id):
    try:
        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            SELECT ci.menu_item_id, ci.restaurant_id, mi.name, mi.price, ci.quantity
            FROM cart_items ci
            JOIN menu_items mi ON ci.menu_item_id = mi.id
            WHERE ci.user_id = %s AND ci.is_active = TRUE
        """, (user_id,))
        rows = cur.fetchall()

        cart_items = [
            {
                "id": row[0],
                "restaurant_id": row[1],
                "name": row[2],
                "price": float(row[3]),
                "quantity": row[4]
            }
            for row in rows
        ]

        return jsonify(cart_items)

    except Exception as e:
        print("❌ Error fetching cart:", e)
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        conn.close()




@restaurant_bp.route("/cart/<int:user_id>/item/<int:item_id>", methods=["DELETE"])
def remove_cart_item(user_id, item_id):
    try:
        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            UPDATE cart_items
            SET is_active = FALSE
            WHERE user_id = %s AND menu_item_id = %s AND is_active = TRUE
        """, (user_id, item_id))

        if cur.rowcount == 0:
            return jsonify({"message": "Item not found or already removed"}), 404

        conn.commit()
        return jsonify({"message": "Item removed from cart"}), 200

    except Exception as e:
        conn.rollback()
        print("❌ Error removing item:", e)
        return jsonify({"error": str(e)}), 500

    finally:
        cur.close()
        conn.close()



# from decimal import Decimal

# @restaurant_bp.route("/orders", methods=["POST"])
# def create_order():
#     data = request.get_json()
#     print("📥 Received order payload:", data)

#     customer_id = data.get("customer_id")
#     address = data.get("address")

#     if not customer_id or not address:
#         return jsonify({
#             "message": "Missing required fields",
#             "details": {"customer_id": customer_id, "address": address}
#         }), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # 🔄 Get all active cart items grouped by restaurant
#         cur.execute("""
#             SELECT ci.restaurant_id, ci.menu_item_id, mi.name, mi.price, ci.quantity
#             FROM cart_items ci
#             JOIN menu_items mi ON ci.menu_item_id = mi.id
#             WHERE ci.user_id = %s AND ci.is_active = TRUE
#         """, (customer_id,))
#         rows = cur.fetchall()

#         if not rows:
#             return jsonify({"message": "Cart is empty"}), 400

#         # 🧾 Group items by restaurant
#         grouped = {}
#         for restaurant_id, menu_item_id, name, price, quantity in rows:
#             item = {
#                 "id": menu_item_id,
#                 "name": name,
#                 "price": float(price),
#                 "quantity": quantity
#             }
#             if restaurant_id not in grouped:
#                 grouped[restaurant_id] = []
#             grouped[restaurant_id].append(item)

#         # Debug: Print grouped items
#         import json
#         print("🧾 Grouped cart items:")
#         print(json.dumps(grouped, indent=2))

#         # 🧮 Calculate parent order total
#         parent_total = sum(
#             Decimal(str(item["price"])) * item["quantity"]
#             for items in grouped.values()
#             for item in items
#         )

#         # 💾 Insert into parent_orders
#         cur.execute("""
#             INSERT INTO parent_orders (customer_id, address, total)
#             VALUES (%s, %s, %s) RETURNING id
#         """, (customer_id, address, parent_total))
#         parent_order_id = cur.fetchone()[0]

#         # 🍽 Create sub-orders per restaurant
#         for restaurant_id, items in grouped.items():
#             sub_total = sum(Decimal(str(i["price"])) * i["quantity"] for i in items)

#             cur.execute("""
#                 INSERT INTO orders (parent_order_id, restaurant_id, items, total)
#                 VALUES (%s, %s, %s, %s)
#             """, (parent_order_id, restaurant_id, json.dumps(items), sub_total))

#             # Deactivate those cart items
#             cur.execute("""
#                 UPDATE cart_items
#                 SET is_active = FALSE
#                 WHERE user_id = %s AND restaurant_id = %s AND is_active = TRUE
#             """, (customer_id, restaurant_id))

#         conn.commit()
#         return jsonify({
#             "message": "Order placed successfully",
#             "parent_order_id": parent_order_id
#         }), 201

#     except Exception as e:
#         conn.rollback()
#         print("❌ Error during multi-restaurant order:", str(e))
#         return jsonify({
#             "message": "Failed to place order",
#             "error": str(e)
#         }), 500

#     finally:
#         cur.close()
#         conn.close()


from decimal import Decimal
import json
from flask import request, jsonify
from app.db import get_db
from flask import Blueprint

@restaurant_bp.route("/orders", methods=["POST"])
def create_order():
    data = request.get_json()
    print("📥 Received order payload:", data)

    customer_id = data.get("customer_id")
    address = data.get("address")

    if not customer_id or not address:
        return jsonify({
            "message": "Missing required fields",
            "details": {"customer_id": customer_id, "address": address}
        }), 400

    try:
        conn = get_db()
        cur = conn.cursor()

        # 🔄 Get all active cart items grouped by restaurant
        cur.execute("""
            SELECT ci.restaurant_id, ci.menu_item_id, mi.name, mi.price, ci.quantity
            FROM cart_items ci
            JOIN menu_items mi ON ci.menu_item_id = mi.id
            WHERE ci.user_id = %s AND ci.is_active = TRUE
        """, (customer_id,))
        rows = cur.fetchall()

        if not rows:
            return jsonify({"message": "Cart is empty"}), 400

        # 🧾 Group items by restaurant
        grouped = {}
        all_items = []
        for restaurant_id, menu_item_id, name, price, quantity in rows:
            item = {
                "id": menu_item_id,
                "name": name,
                "price": float(price),
                "quantity": quantity
            }
            all_items.append(item)  # 🔄 for parent_orders
            grouped.setdefault(restaurant_id, []).append(item)

        # Debug: Print grouped items
        print("🧾 Grouped cart items:")
        print(json.dumps(grouped, indent=2))

        # 🧮 Calculate parent order total
        parent_total = sum(
            Decimal(str(item["price"])) * item["quantity"]
            for item in all_items
        )

        # 💾 Insert into parent_orders (✅ include items!)
        cur.execute("""
            INSERT INTO parent_orders (customer_id, address, total, items)
            VALUES (%s, %s, %s, %s)
            RETURNING id
        """, (customer_id, address, parent_total, json.dumps(all_items)))
        parent_order_id = cur.fetchone()[0]

        # 🍽 Create sub-orders per restaurant
        for restaurant_id, items in grouped.items():
            sub_total = sum(Decimal(str(i["price"])) * i["quantity"] for i in items)

            cur.execute("""
                INSERT INTO orders (parent_order_id, restaurant_id, items, total)
                VALUES (%s, %s, %s, %s)
            """, (parent_order_id, restaurant_id, json.dumps(items), sub_total))

            # Deactivate those cart items
            cur.execute("""
                UPDATE cart_items
                SET is_active = FALSE
                WHERE user_id = %s AND restaurant_id = %s AND is_active = TRUE
            """, (customer_id, restaurant_id))

        conn.commit()
        return jsonify({
            "message": "Order placed successfully",
            "parent_order_id": parent_order_id
        }), 201

    except Exception as e:
        conn.rollback()
        print("❌ Error during multi-restaurant order:", str(e))
        return jsonify({
            "message": "Failed to place order",
            "error": str(e)
        }), 500

    finally:
        cur.close()
        conn.close()



@restaurant_bp.route("/orders/history", methods=["GET"])
def order_history():
    customer_id = request.args.get("customer_id")
    if not customer_id:
        return jsonify({"message": "Missing customer ID"}), 400

    conn = get_db()
    cursor = conn.cursor()

    try:
        # 🔄 Fetch parent orders
        cursor.execute("""
            SELECT id, total, created_at, address
            FROM parent_orders
            WHERE customer_id = %s
            ORDER BY created_at DESC
        """, (customer_id,))
        parent_rows = cursor.fetchall()

        orders = []
        for row in parent_rows:
            order_id, total, created_at, address = row

            # ✅ Fetch sub-orders with restaurant name
            cursor.execute("""
                SELECT o.restaurant_id, r.name, o.total, o.items, o.created_at
                FROM orders o
                JOIN restaurants r ON o.restaurant_id = r.id
                WHERE o.parent_order_id = %s
            """, (order_id,))
            sub_orders = cursor.fetchall()

            order_details = []
            for restaurant_id, restaurant_name, sub_total, items_json, sub_created in sub_orders:
                try:
                    items = json.loads(items_json) if isinstance(items_json, str) else items_json
                except:
                    items = []

                order_details.append({
                    "restaurant_id": restaurant_id,
                    "restaurant_name": restaurant_name,
                    "total": float(sub_total),
                    "items": items,
                    "created_at": sub_created.isoformat() if sub_created else ""
                })

            orders.append({
                "order_id": order_id,
                "total": float(total),
                "created_at": created_at.isoformat() if created_at else "",
                "address": address,
                "sub_orders": order_details
            })

        return jsonify(orders), 200

    except Exception as e:
        print("❌ Error fetching order history:", str(e))
        return jsonify({"message": "Error fetching order history", "error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()


@restaurant_bp.route("/addresses/<int:user_id>", methods=["GET"])
def get_addresses(user_id):
    conn = get_db()
    cur = conn.cursor()
    try:
        cur.execute("SELECT id, address, is_default FROM addresses WHERE user_id = %s", (user_id,))
        addresses = [{"id": row[0], "address": row[1], "is_default": row[2]} for row in cur.fetchall()]
        return jsonify(addresses), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()
        conn.close()


@restaurant_bp.route("/addresses/default", methods=["PUT"])
def set_default_address():
    data = request.get_json()
    user_id = data.get("user_id")
    address_id = data.get("address_id")

    if not user_id or not address_id:
        return jsonify({"error": "user_id and address_id are required"}), 400

    conn = get_db()
    cur = conn.cursor()
    try:
        cur.execute("UPDATE addresses SET is_default = FALSE WHERE user_id = %s", (user_id,))
        cur.execute("UPDATE addresses SET is_default = TRUE WHERE id = %s", (address_id,))
        conn.commit()
        return jsonify({"message": "Default address updated"}), 200
    except Exception as e:
        conn.rollback()
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()
        conn.close()


@restaurant_bp.route('/user/<int:user_id>/primary-address', methods=['GET'])
def get_primary_address(user_id):
    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("SELECT address FROM addresses WHERE user_id = %s AND is_default = TRUE", (user_id,))
        row = cur.fetchone()
        cur.close()
        conn.close()
        return jsonify({"address": row[0] if row else ""}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@restaurant_bp.route('/restaurants/<int:restaurant_id>/menu', methods=['GET'])
def get_menu(restaurant_id):
    try:
        conn = get_db()
        cur = conn.cursor()

        cur.execute("""
            SELECT id, name, description, price, image_url
            FROM menu_items
            WHERE restaurant_id = %s
        """, (restaurant_id,))
        rows = cur.fetchall()

        menu = [
            {
                "id": row[0],
                "name": row[1],
                "description": row[2],
                "price": float(row[3]),
                "image_url": row[4]
            }
            for row in rows
        ]

        return jsonify(menu), 200
    except Exception as e:
        print("❌ Error fetching menu:", e)
        return jsonify({"error": str(e)}), 500
    finally:
        cur.close()
        conn.close()

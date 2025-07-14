# from flask import Blueprint, request, jsonify
# from app.db import get_db  # or however you connect to your DB

# orders_bp = Blueprint('orders', __name__)

# @orders_bp.route('/orders', methods=['POST'])
# def place_order():
#     data = request.get_json()
#     print("Received data:", data)
#     delivery_address = data.get('delivery_address')
#     items = data.get('items')  # list of {item_id, quantity}
#     email = data.get('email')
#       # Debugging line to check input

#     if not all([delivery_address, items, email]):
#         return jsonify({'error': 'Missing required fields'}), 400

#     try:
#         db = get_db()
#         cursor = db.cursor()

#         # 1. Insert into orders table
#         cursor.execute(
#             "INSERT INTO orders (email, delivery_address) VALUES (%s, %s) RETURNING id",
#             (email, delivery_address)
#         )
#         order_id = cursor.fetchone()[0]

#         # 2. Insert each item into order_items table
#         for item in items:
#             cursor.execute(
#                 "INSERT INTO order_items (order_id, item_id, quantity) VALUES (%s, %s, %s)",
#                 (order_id, item['item_id'], item['quantity'])
#             )

#         db.commit()
#         return jsonify({'message': 'Order placed successfully'}), 201

#     except Exception as e:
#         print("Error placing order:", str(e))
#         db.rollback()
#         return jsonify({'error': 'Failed to place order'}), 500

# from flask import Blueprint, request, jsonify
# from app.db import get_db  # Ensure this function is defined in app/db.py

# orders_bp = Blueprint('orders', __name__)

# @orders_bp.route('/orders', methods=['POST'])
# def place_order():
#     data = request.get_json()
#     print("Received data:", data)  # Debugging incoming JSON payload

#     delivery_address = data.get('delivery_address')
#     items = data.get('items')  # Should be a list of {item_id, quantity}
#     email = data.get('email')

#     # Debug check for missing fields
#     if not all([delivery_address, items, email]):
#         return jsonify({
#             'error': 'Missing required fields',
#             'delivery_address': delivery_address,
#             'items': items,
#             'email': email
#         }), 400

#     try:
#         db = get_db()
#         cursor = db.cursor()

#         # Insert into orders table
#         cursor.execute(
#             "INSERT INTO orders (email, delivery_address) VALUES (%s, %s) RETURNING id",
#             (email, delivery_address)
#         )
#         order_id = cursor.fetchone()[0]

#         # Insert into order_items table
#         for item in items:
#             cursor.execute(
#                 "INSERT INTO order_items (order_id, item_id, quantity) VALUES (%s, %s, %s)",
#                 (order_id, item['item_id'], item['quantity'])
#             )

#         db.commit()
#         return jsonify({'message': 'Order placed successfully'}), 201

#     except Exception as e:
#         print("Error placing order:", str(e))  # Debug error details
#         db.rollback()
#         return jsonify({'error': 'Failed to place order', 'details': str(e)}), 500

from flask import Blueprint, request, jsonify
from app.db import get_db

orders_bp = Blueprint('orders', __name__)

@orders_bp.route("/orders/history", methods=["GET"])
def order_history():
    customer_id = request.args.get("customer_id")
    if not customer_id:
        return jsonify({"message": "Missing customer ID"}), 400

    conn = get_db()
    cursor = conn.cursor()

    try:
        query = """
        SELECT o.id AS order_id, o.total, o.created_at, o.address,
               mi.name AS item_name, oi.quantity, mi.price
        FROM orders o
        JOIN order_items oi ON o.id = oi.order_id
        JOIN menu_items mi ON oi.menu_item_id = mi.id
        WHERE o.customer_id = %s
        ORDER BY o.created_at DESC;
        """
        cursor.execute(query, (customer_id,))
        rows = cursor.fetchall()

        from collections import defaultdict
        orders = defaultdict(lambda: {"items": []})

        for row in rows:
            order_id = row[0]
            orders[order_id].update({
                "order_id": order_id,
                "total": row[1],
                "created_at": row[2],
                "address": row[3]
            })
            orders[order_id]["items"].append({
                "name": row[4],
                "quantity": row[5],
                "price": row[6]
            })

        return jsonify(list(orders.values()))

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    finally:
        cursor.close()
        conn.close()

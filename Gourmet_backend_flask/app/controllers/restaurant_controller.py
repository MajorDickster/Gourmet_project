from flask import jsonify
from app.db import get_db
import traceback

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



        
def get_menu_for_restaurant(restaurant_id):
    conn = get_db()
    cur = conn.cursor()
    try:
        query = """
            SELECT id, name, description, price, image_url
            FROM menu_items
            WHERE restaurant_id = %s
        """
        cur.execute(query, (restaurant_id,))
        items = cur.fetchall()
        menu = [
            {
                "id": row[0],
                "name": row[1],
                "description": row[2],
                "price": float(row[3]),
                "image_url": row[4]
            }
            for row in items
        ]
        return jsonify(menu), 200
    except Exception as e:
        print(f"Error fetching menu: {e}")
        return jsonify({"error": "Could not fetch menu"}), 500
    finally:
        cur.close()
        conn.close()

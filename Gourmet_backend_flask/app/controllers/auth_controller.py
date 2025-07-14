# from flask import request, jsonify
# import psycopg2
# from app.db import get_db  
# import traceback# This assumes you created app/db.py with get_db()

# # SIGNUP CONTROLLER
# # def signup_user():
# #     data = request.get_json()
# #     if not data:
# #         return jsonify({"error": "No input data provided"}), 400

# #     email = data.get("email")
# #     password = data.get("password")
# #     role = data.get("role", "customer")  # Default to customer

# #     if not email or not password:
# #         return jsonify({"error": "Email and password are required"}), 400

# #     try:
# #         conn = get_db()
# #         cur = conn.cursor()

# #         cur.execute("""
# #             INSERT INTO users (email, password, role)
# #             VALUES (%s, %s, %s)
# #             RETURNING id;
# #         """, (email, password, role))
# #         user_id = cur.fetchone()[0]

# #         conn.commit()
# #         cur.close()
# #         conn.close()

# #         return jsonify({"message": "User signed up successfully"}), 201

# #     except Exception as e:
# #         traceback.print_exc()
# #         return jsonify({"error": str(e)}), 500

# def signup_user():
#     from flask import request, jsonify
#     import traceback
#     from app.db import get_db

#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")
#     role = data.get("role", "customer")  # Default to customer

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         cur.execute("""
#             INSERT INTO users (email, password, role)
#             VALUES (%s, %s, %s)
#             RETURNING id;
#         """, (email, password, role))

#         user_id = cur.fetchone()[0]

#         conn.commit()
#         cur.close()
#         conn.close()

#         return jsonify({
#             "message": "User signed up successfully",
#             "user_id": user_id
#         }), 201

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500


# def login_user():
#     from traceback import print_exc
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # Fetch user data
#         cur.execute("SELECT id, password, role FROM users WHERE email = %s", (email,))
#         user = cur.fetchone()

#         cur.close()
#         conn.close()

#         if user and user[1] == password:  # user[1] is password
#             return jsonify({
#                 "message": "Login successful",
#                 "email": email,
#                 "role": user[2],       # user[2] is role
#                 "user_id": user[0]     # user[0] is id
#             }), 200
#         else:
#             return jsonify({"error": "Invalid email or password"}), 401

#     except Exception as e:
#         print("❌ Error during login:")
#         print_exc()
#         return jsonify({"error": "Server error", "details": str(e)}), 500


# def complete_profile():
#     data = request.get_json()
#     role= data.get("role", "customer")  # Default to customer
#     if role.lower() == "admin":
#         return jsonify({"error": "Cannot select admin role"}), 403

#     email = data.get("email")  # Use this to find the user
#     if not email:
#         return jsonify({"error": "Email is required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         cur.execute("""
#             UPDATE users
#             SET first_name = %s,
#                 last_name = %s,
#                 phone_number = %s,
#                 date_of_birth = %s,
#                 address = %s,
#                 role = %s
#             WHERE email = %s
#         """, (
#             data.get("first_name"),
#             data.get("last_name"),
#             data.get("phone_number"),
#             data.get("date_of_birth"),
#             data.get("address"),
#             role,
#             email
#         ))

#         conn.commit()
#         cur.close()
#         conn.close()

#         return jsonify({"message": "Profile updated successfully"}), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500
    
# def get_user_info():
#     email = request.args.get('email')
#     if not email:
#         return jsonify({"error": "Email is required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()
#         cur.execute("""
#             SELECT first_name, last_name, phone_number, date_of_birth, address
#             FROM users
#             WHERE email = %s
#         """, (email,))
#         profile = cur.fetchone()
#         cur.close()
#         conn.close()

#         if profile and all(profile):
#             return jsonify({"completed": True}), 200
#         else:
#             return jsonify({"completed": False}), 200

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500


from flask import request, jsonify
from app.db import get_db
import traceback

# ---------------- SIGNUP CONTROLLER ----------------
# def signup_user():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")
#     role_name = data.get("role", "customer").lower()

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # 1. Insert into users
#         cur.execute("""
#             INSERT INTO users (email, password)
#             VALUES (%s, %s)
#             RETURNING id;
#         """, (email, password))
#         user_id = cur.fetchone()[0]

#         # 2. Get role_id from roles table
#         cur.execute("SELECT id FROM roles WHERE LOWER(name) = %s;", (role_name,))
#         role_result = cur.fetchone()
#         if not role_result:
#             conn.rollback()
#             return jsonify({"error": f"Role '{role_name}' not found"}), 400
#         role_id = role_result[0]

#         # 3. Insert into user_roles
#         cur.execute("INSERT INTO user_roles (user_id, role_id) VALUES (%s, %s);", (user_id, role_id))

#         conn.commit()
#         cur.close()
#         conn.close()

#         return jsonify({
#             "message": "User signed up successfully",
#             "user_id": user_id,
#             "role": role_name
#         }), 201

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500

def signup_user():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No input data provided"}), 400

    email = data.get("email")
    password = data.get("password")
    role_name = data.get("role", "customer").lower()

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    try:
        conn = get_db()
        cur = conn.cursor()

        # Check if email already exists
        cur.execute("SELECT 1 FROM users WHERE LOWER(email) = LOWER(%s);", (email,))
        if cur.fetchone():
            return jsonify({"error": "Email already exists"}), 400

        # 1. Insert into users
        cur.execute("""
            INSERT INTO users (email, password)
            VALUES (%s, %s)
            RETURNING id;
        """, (email, password))
        user_id = cur.fetchone()[0]

        # 2. Get role_id from roles table
        cur.execute("SELECT role_id FROM roles WHERE LOWER(role_name) = %s;", (role_name,))
        role_result = cur.fetchone()
        if not role_result:
            conn.rollback()
            return jsonify({"error": f"Role '{role_name}' not found"}), 400
        role_id = role_result[0]

        # 3. Insert into user_roles
        cur.execute("INSERT INTO user_roles (user_id, role_id) VALUES (%s, %s);", (user_id, role_id))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({
            "message": "User signed up successfully",
            "user_id": user_id,
            "role": role_name
        }), 201

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


# ---------------- LOGIN CONTROLLER ----------------
# def login_user():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # Fetch user info
#         cur.execute("SELECT id, password FROM users WHERE email = %s;", (email,))
#         user = cur.fetchone()
#         if not user or user[1] != password:
#             return jsonify({"error": "Invalid email or password"}), 401

#         user_id = user[0]

#         # Fetch all roles
#         cur.execute("""
#             SELECT u.id, u.email, u.password, ARRAY_AGG(r.role_name)
#             FROM users u
#             JOIN user_roles ur ON u.id = ur.user_id
#             JOIN roles r ON ur.role_id = r.role_id
#             WHERE u.email = %s
#             GROUP BY u.id, u.email, u.password
#         """, (email,))
#         roles = [row[0] for row in cur.fetchall()]

#         cur.close()
#         conn.close()

#         return jsonify({
#             "message": "Login successful",
#             "email": email,
#             "user_id": user_id,
#             "roles": roles
#         }), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": "Server error", "details": str(e)}), 500

# def login_user():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # Step 1: Authenticate
#         cur.execute("SELECT id, password FROM users WHERE email = %s;", (email,))
#         user = cur.fetchone()
#         if not user or user[1] != password:
#             return jsonify({"error": "Invalid email or password"}), 401

#         user_id = user[0]

#         # Step 2: Fetch role
#         cur.execute("""
#             SELECT r.role_name
#             FROM roles r
#             JOIN user_roles ur ON ur.role_id = r.role_id
#             WHERE ur.user_id = %s
#         """, (user_id,))
#         role_row = cur.fetchone()
#         role = role_row[0] if role_row else None

#         cur.close()
#         conn.close()

#         return jsonify({
#             "message": "Login successful",
#             "email": email,
#             "user_id": user_id,
#             "role": role
#         }), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": "Server error", "details": str(e)}), 500

# from flask import jsonify, request
# from app.db import get_db
# import traceback
# from flask_jwt_extended import create_access_token
# import datetime

# def login_user():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No input data provided"}), 400

#     email = data.get("email")
#     password = data.get("password")

#     if not email or not password:
#         return jsonify({"error": "Email and password are required"}), 400

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # Step 1: Authenticate
#         cur.execute("SELECT id, password FROM users WHERE email = %s;", (email,))
#         user = cur.fetchone()
#         if not user or user[1] != password:
#             return jsonify({"error": "Invalid email or password"}), 401

#         user_id = user[0]

#         # Step 2: Fetch role
#         cur.execute("""
#             SELECT r.role_name
#             FROM roles r
#             JOIN user_roles ur ON ur.role_id = r.role_id
#             WHERE ur.user_id = %s
#         """, (user_id,))
#         role_row = cur.fetchone()
#         role = role_row[0] if role_row else None

#         cur.close()
#         conn.close()

#         # Step 3: Create JWT access token
#         expires = datetime.timedelta(days=7)
#         access_token = create_access_token(identity={"user_id": user_id, "email": email, "role": role}, expires_delta=expires)

#         return jsonify({
#             "message": "Login successful",
#             "access_token": access_token,
#             "email": email,
#             "user_id": user_id,
#             "role": role
#         }), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": "Server error", "details": str(e)}), 500

from flask import request, jsonify
from flask_jwt_extended import create_access_token
from app.db import get_db
import datetime

def login_user():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400

    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT id, password FROM users WHERE email = %s", (email,))
    user = cur.fetchone()

    if not user or user[1] != password:
        return jsonify({"error": "Invalid credentials"}), 401

    user_id = user[0]
    cur.execute("""
        SELECT r.role_name FROM roles r
        JOIN user_roles ur ON ur.role_id = r.role_id
        WHERE ur.user_id = %s
    """, (user_id,))
    role_row = cur.fetchone()
    role = role_row[0] if role_row else "customer"

    cur.close()
    conn.close()

    access_token = create_access_token(
        identity={"user_id": user_id, "email": email, "role": role},
        expires_delta=datetime.timedelta(days=7)
    )

    return jsonify({
        "message": "Login successful",
        "access_token": access_token,
        "user_id": user_id,
        "email": email,
        "role": role
    }), 200


# ---------------- COMPLETE PROFILE ----------------
# def complete_profile():
#     data = request.get_json()

#     email = data.get("email")
#     role_name = data.get("role", "customer").lower()

#     if not email:
#         return jsonify({"error": "Email is required"}), 400

#     if role_name == "admin":
#         return jsonify({"error": "Cannot select admin role"}), 403

#     try:
#         conn = get_db()
#         cur = conn.cursor()

#         # Update profile info
#         cur.execute("""
#             UPDATE users
#             SET first_name = %s,
#                 last_name = %s,
#                 phone_number = %s,
#                 date_of_birth = %s
#             WHERE email = %s
#         """, (
#             data.get("first_name"),
#             data.get("last_name"),
#             data.get("phone_number"),
#             data.get("date_of_birth"),
#             email
#         ))

#         # Fetch user_id
#         cur.execute("SELECT id FROM users WHERE email = %s;", (email,))
#         user_id = cur.fetchone()[0]

#         # Get role_id from roles table
#         cur.execute("SELECT id FROM roles WHERE LOWER(name) = %s;", (role_name,))
#         role_result = cur.fetchone()
#         if role_result:
#             role_id = role_result[0]
#             # Insert if not exists
#             cur.execute("""
#                 INSERT INTO user_roles (user_id, role_id)
#                 SELECT %s, %s
#                 WHERE NOT EXISTS (
#                     SELECT 1 FROM user_roles WHERE user_id = %s AND role_id = %s
#                 )
#             """, (user_id, role_id, user_id, role_id))

#         conn.commit()
#         cur.close()
#         conn.close()

#         return jsonify({"message": "Profile updated successfully"}), 200

#     except Exception as e:
#         traceback.print_exc()
#         return jsonify({"error": str(e)}), 500

def complete_profile():
    data = request.get_json()
    email = data.get("email")
    role_name = data.get("role", "customer").lower()

    if not email:
        return jsonify({"error": "Email is required"}), 400

    if role_name == "admin":
        return jsonify({"error": "Cannot select admin role"}), 403

    try:
        conn = get_db()
        cur = conn.cursor()

        # Update user's personal profile info
        cur.execute("""
            UPDATE users
            SET first_name = %s,
                last_name = %s,
                phone_number = %s,
                date_of_birth = %s
            WHERE email = %s
        """, (
            data.get("first_name"),
            data.get("last_name"),
            data.get("phone_number"),
            data.get("date_of_birth"),
            email
        ))

        # Fetch user_id
        cur.execute("SELECT id FROM users WHERE email = %s;", (email,))
        user = cur.fetchone()
        if not user:
            return jsonify({"error": "User not found"}), 404
        user_id = user[0]

        # Get role_id from roles table
        cur.execute("SELECT role_id FROM roles WHERE LOWER(role_name) = %s;", (role_name,))
        role_result = cur.fetchone()
        if role_result:
            role_id = role_result[0]
            # Insert only if not already exists
            cur.execute("""
                INSERT INTO user_roles (user_id, role_id)
                SELECT %s, %s
                WHERE NOT EXISTS (
                    SELECT 1 FROM user_roles WHERE user_id = %s AND role_id = %s
                );
            """, (user_id, role_id, user_id, role_id))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "Profile updated successfully"}), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


# ---------------- GET PROFILE COMPLETION STATUS ----------------
def get_user_info():
    email = request.args.get('email')
    if not email:
        return jsonify({"error": "Email is required"}), 400

    try:
        conn = get_db()
        cur = conn.cursor()
        cur.execute("""
            SELECT first_name, last_name, phone_number, date_of_birth
            FROM users
            WHERE email = %s
        """, (email,))
        profile = cur.fetchone()
        cur.close()
        conn.close()

        completed = profile and all(profile)
        return jsonify({"completed": completed}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

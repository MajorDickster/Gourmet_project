# # # # # # app/db.py
# # # # # import os
# # # # # # import psycopg2
# # # # # # from dotenv import load_dotenv

# # # # # # load_dotenv()

# # # # # # def get_db_connection():
# # # # # #     return psycopg2.connect(os.getenv("DATABASE_URL"))

# # # # # app/db.py
# # # # import os
# # # # import psycopg2
# # # # from dotenv import load_dotenv

# # # # load_dotenv()  # Make sure this is called before os.getenv()

# # # # def get_db_connection():
# # # #     db_url = os.getenv("DATABASE_URL")
# # # #     print("Connecting to:", db_url)  # 👈 TEMPORARY: Check what's being read
# # # #     return psycopg2.connect(db_url)

# # # import psycopg2
# # # import os
# # # from dotenv import load_dotenv

# # # load_dotenv()

# # # def get_db_connection():
# # #     return psycopg2.connect(os.getenv("DATABASE_URL"))

# # # app/db.py

# # import psycopg2
# # import os
# # from dotenv import load_dotenv

# # load_dotenv()

# # def get_db():
# #     return psycopg2.connect(os.getenv("DATABASE_URL"))

# # import psycopg2
# # from psycopg2.extras import RealDictCursor
# # import os

# def get_db():
#     from dotenv import load_dotenv
#     load_dotenv()  # Ensures .env is loaded in case it hasn't been
#     db_url = os.getenv("DATABASE_URL")

#     if not db_url:
#         raise ValueError("DATABASE_URL not found in environment variables")

#     return psycopg2.connect(db_url, cursor_factory=RealDictCursor)

# # import psycopg2.extras

# # def get_db():
# #     try:
# #         conn = psycopg2.connect('DATABASE_URL', cursor_factory=psycopg2.extras.RealDictCursor)
# #         return conn
# #     except Exception as e:
# #         print("❌ DB connection error:", e)
# #         return None

# import psycopg2
# import os

# def get_db():
#     db_url = os.getenv("DATABASE_URL")  # ✅ Get the real value
#     if not db_url:
#         print("❌ DATABASE_URL is not set in environment.")
#         return None


# import psycopg2
# import os

# def get_db():
#     try:
#         conn = psycopg2.connect(os.getenv("DATABASE_URL"))
#         return conn
#     except Exception as e:
#         print("❌ DB connection error:", e)
#         return None


import os
import psycopg2

def get_db():
    try:
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        return conn
    except Exception as e:
        print(f"❌ DB connection error: {e}")
        return None

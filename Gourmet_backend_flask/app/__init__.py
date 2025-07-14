# # from flask import Flask
# # from flask_cors import CORS
# # from dotenv import load_dotenv
# # import os

# # from app.routes.auth import auth_bp
# # from app.routes.restaurant_routes import restaurant_bp

# # load_dotenv()

# # def create_app():
# #     app = Flask(__name__)

# #     # Load database URL (if you need it elsewhere)
# #     db_url = os.getenv('DATABASE_URL')

# #     # CORS settings to allow frontend on localhost:5173 to connect
# #     CORS(
# #         app,
# #         origins=["http://localhost:5173"],
# #         supports_credentials=True,
# #         allow_headers=["Content-Type", "Authorization"],
# #         methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"]
# #     )

# #     # Register blueprints
# #     app.register_blueprint(auth_bp, url_prefix='/api')
# #     app.register_blueprint(restaurant_bp, url_prefix='/api')

# #     @app.route('/')
# #     def index():
# #         return 'Flask server is running!'

# #     return app

# # app/__init__.py

# # from flask import Flask
# # from flask_cors import CORS
# # from dotenv import load_dotenv
# # import os

# # from app.routes.auth import auth_bp
# # from app.routes.restaurant_routes import restaurant_bp  # if needed


# # def create_app():
# #     app = Flask(__name__)
# #     CORS(app)
# #     load_dotenv()

# #     # Register blueprints with /api prefix
# #     app.register_blueprint(auth_bp, url_prefix='/api')
# #     app.register_blueprint(restaurant_bp, url_prefix='/api')
    
# #   # if using restaurant routes too

# #     return app

# from flask import Flask
# from flask_jwt_extended import JWTManager
# from flask_cors import CORS
# import datetime
# from dotenv import load_dotenv
# import os

# def create_app():
#     app = Flask(__name__)
#     CORS(app)

#     # Configure secret key (strong one in production!)
#     app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY", "super-secret")  # 🛡️ Use env variable ideally
#     app.config["JWT_ACCESS_TOKEN_EXPIRES"] = datetime.timedelta(days=7)

#     # Initialize JWT
#     jwt = JWTManager(app)

#     from app.routes.auth import auth_bp
#     from app.routes.restaurant_routes import restaurant_bp

#     app.register_blueprint(auth_bp, url_prefix="/api")
#     app.register_blueprint(restaurant_bp, url_prefix="/api")

#     return app

from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from dotenv import load_dotenv
import os

from app.routes.auth import auth_bp
from app.routes.restaurant_routes import restaurant_bp  # if needed

def create_app():
    app = Flask(__name__)
    CORS(app)

    # Load environment variables
    load_dotenv()

    # 🔐 Configure JWT
    app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")  # Ensure this is set in your .env
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 60 * 60 * 24 * 7  # Optional: 7 days

    jwt = JWTManager(app)  # Initialize JWT extension

    # Register routes
    app.register_blueprint(auth_bp, url_prefix='/api')
    app.register_blueprint(restaurant_bp, url_prefix='/api')

    return app

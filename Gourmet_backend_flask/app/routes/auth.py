from flask import Blueprint, request, jsonify
from app.controllers.auth_controller import signup_user, login_user, complete_profile, get_user_info

# Create Blueprint for authentication
auth_bp = Blueprint('auth', __name__)

# POST /api/signup
@auth_bp.route('/signup', methods=['POST'])
def signup():
    return signup_user()

# POST /api/login
@auth_bp.route('/login', methods=['POST'])
def login():
    return login_user()

# PUT /api/complete-profile
@auth_bp.route('/complete-profile', methods=['PUT'])
def update_profile():
    return complete_profile()

# GET /api/user-info
@auth_bp.route('/user-info', methods=['GET'])
def user_info():
    return get_user_info()

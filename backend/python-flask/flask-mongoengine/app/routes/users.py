from flask import Blueprint, jsonify, request
from app.models.user import User

users = Blueprint('users', __name__)


# List all users
@users.route('/users', methods=['GET'])
def list_users():
    users = User.objects.all()
    return jsonify(users=[{'name': user.name, 'email': user.email} for user in users])


# Create a new user
@users.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    if not data:
        return jsonify(message="No input data provided"), 400
    name = data.get('name')
    email = data.get('email')

    if not name or not email:
        return jsonify(message="Missing name or email"), 400

    user = User(name=name, email=email)
    user.save()

    return jsonify(message="User created successfully!", user={'name': user.name, 'email': user.email}), 201


# Get a specific user by email
@users.route('/users/<string:email>', methods=['GET'])
def get_user(email):
    user = User.objects(email=email).first()
    if not user:
        return jsonify(message="User not found"), 404
    return jsonify(user={'name': user.name, 'email': user.email})


# Update a user's details by email
@users.route('/users/<string:email>', methods=['PUT'])
def update_user(email):
    user = User.objects(email=email).first()
    if not user:
        return jsonify(message="User not found"), 404

    data = request.get_json()
    if not data:
        return jsonify(message="No input data provided"), 400

    user.name = data.get('name', user.name)
    user.email = data.get('email', user.email)
    user.save()

    return jsonify(message="User updated successfully", user={'name': user.name, 'email': user.email})


# Delete a user by email
@users.route('/users/<string:email>', methods=['DELETE'])
def delete_user(email):
    user = User.objects(email=email).first()
    if not user:
        return jsonify(message="User not found"), 404

    user.delete()
    return jsonify(message="User deleted successfully")

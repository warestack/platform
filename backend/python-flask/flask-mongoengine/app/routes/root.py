from flask import Blueprint, jsonify
from app.models.example_model import Example

root = Blueprint('root', __name__)

@main.route('/')
def info():
    return jsonify(message="Hello, World!")

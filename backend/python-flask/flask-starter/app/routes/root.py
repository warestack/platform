from flask import Blueprint, jsonify

root = Blueprint('root', __name__)

@main.route('/')
def info():
    return jsonify(message="Hello, World!")

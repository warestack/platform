from flask import Blueprint, jsonify

root = Blueprint('root', __name__)


@root.route('/')
def info():
    return jsonify(message="Hello, World!")

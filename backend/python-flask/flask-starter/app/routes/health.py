from flask import Blueprint, jsonify

health = Blueprint('health', __name__)


@health.route('/healthz')
def health_check():
    return jsonify(status="healthy"), 200

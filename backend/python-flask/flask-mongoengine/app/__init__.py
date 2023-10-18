from flask import Flask
from flask_mongoengine import MongoEngine
from dotenv import load_dotenv
import os

load_dotenv()

db = MongoEngine()


def create_app():
    app = Flask(__name__)
    app.config["MONGODB_SETTINGS"] = {
        "host": os.getenv("MONGO_URI")
    }
    db.init_app(app)

    # Import and register the root blueprint
    from .routes.root import root as root_blueprint
    app.register_blueprint(root_blueprint)

    # Import and register the health blueprint
    from .routes.health import health as health_blueprint
    app.register_blueprint(health_blueprint)

    # Import and register the users blueprint
    from .routes.users import users as users_blueprint
    app.register_blueprint(users_blueprint)

    return app

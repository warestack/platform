from app import db

class User(db.Document):
    name = db.StringField(required=True)
    email = db.StringField(required=True)

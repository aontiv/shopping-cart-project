from webapp.server import app
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Cart(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    qCart = db.Column(db.Integer, nullable=False)

    _id = db.Column(db.Integer, db.ForeignKey('product.id'))

    def __repr__(self):
        return '<Cart %r' % self.name

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    _id = db.Column(db.Integer, nullable=-False)
    description = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    price = db.Column(db.Float, nullable=False)
    qInventory = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Product %r' % self.name

db.create_all()

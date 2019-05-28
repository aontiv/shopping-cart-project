import json
import uuid
from flask import Flask

app = Flask(__name__, template_folder='./dist', static_folder='./dist/static')
app.secret_key = uuid.uuid4().bytes

from webapp.db.db_setup import db, Product

# Init Database
def init_database():
    products_file = open('webapp/db/products.json', 'r')
    products_dict = json.load(products_file)

    for product in products_dict['productList']:
        db_product = Product(
            description = product["description"],
            name = product["name"],
            _id = product["_id"],
            image = product["image"],
            price = product["price"],
            qInventory = product["qInventory"]
        )

        db.session.add(db_product)
        db.session.commit()

    products_file.close()

if len(Product.query.all()) == 0:
    init_database()

import webapp.routes.main
import webapp.routes.status
import webapp.routes.login
import webapp.routes.logout
import webapp.routes.get_products
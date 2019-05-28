import json
from webapp.server import app
from flask import jsonify, make_response
from webapp.db.db_setup import db, Product

@app.route('/get_products', methods=['GET'])
def get_products():
    db_products = Product.query.all()

    new_products = []
    for product in db_products:
        new_products.append({
            '_id': product._id,
            'description': product.description,
            'name': product.name,
            'image': product.image,
            'price': product.price,
            'qInventory': product.qInventory
        })
    return make_response((json.dumps({ 'productList': new_products }), { 'Content-Type': 'application/json' }))

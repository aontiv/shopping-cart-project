from flask import jsonify
from webapp.server import app
from webapp.db.db_setup import db, Product

@app.route('/decrement_inventory/<id>', methods=['UPDATE'])
def decrement_inventory(id):
    product = Product.query.filter_by(_id = id).first()

    product.qInventory = product.qInventory - 1

    db.session.commit()
    return jsonify({ 'message': 'product inventory quantity reduced by 1' })

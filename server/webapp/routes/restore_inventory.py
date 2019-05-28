from flask import jsonify
from webapp.server import app
from webapp.db.db_setup import db, Product

@app.route('/restore_inventory/<id>/<q>', methods=['UPDATE'])
def restore_inventory(id, q):
    product = Product.query.filter_by(_id = id).first()

    product.qInventory = product.qInventory + int(q)

    db.session.commit()
    return jsonify({ 'message': 'product inventory restored by {}'.format(q) })

from flask import jsonify
from webapp.server import app
from webapp.db.db_setup import db, Cart

@app.route('/increment_cart/<id>', methods=['UPDATE'])
def increment_cart(id):
    item = Cart.query.filter_by(_id = id).first()

    item.qCart = item.qCart + 1

    db.session.commit()
    return jsonify({ 'message': 'cart item quantity increased by 1' })

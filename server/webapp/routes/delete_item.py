from flask import jsonify
from webapp.server import app
from webapp.db.db_setup import db, Cart

@app.route('/delete_item/<id>', methods=['DELETE'])
def delete_item(id):
    item = Cart.query.filter_by(_id = id).first()

    db.session.delete(item)
    db.session.commit()
    return jsonify({ 'message': 'cart item deleted' })

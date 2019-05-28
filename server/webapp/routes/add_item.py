from webapp.server import app
from flask import request, jsonify
from webapp.db.db_setup import db, Cart

@app.route('/add_item', methods=['POST'])
def add_item():
    rq_dict = request.get_json()

    new_item = Cart(
        description = rq_dict['description'],
        name = rq_dict['name'],
        price = rq_dict['price'],
        qCart = rq_dict['qCart'],
        _id = rq_dict['_id']
    )

    db.session.add(new_item)
    db.session.commit()

    return jsonify({ 'message': 'new cart item added' })

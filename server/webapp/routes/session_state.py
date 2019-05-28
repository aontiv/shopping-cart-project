from flask import jsonify
from webapp.server import app
from webapp.db.db_setup import Product, Cart

@app.route('/session_state', methods=['GET'])
def session_state():
    db_cart = Cart.query.all()
    db_products = Product.query.all()

    products_list = []
    for product in db_products:
        products_list.append({
            '_id': product._id,
            'description': product.description,
            'name': product.name,
            'image': product.image,
            'price': product.price,
            'qInventory': product.qInventory
        })

    cart_list = []
    for item in db_cart:
        cart_list.append({
            'description': item.description,
            'name': item.name,
            'price': item.price,
            'qCart': item.qCart,
            '_id': item._id
        })
    return jsonify({ 'productList': products_list, 'cartList': cart_list })

import uuid, json
from webapp.server import app
from webapp.db.db_setup import db, Product
from flask import request, session, render_template, redirect

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['KEY'] = str(uuid.uuid4())

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
        return redirect('/session_state')
    else:
        return render_template('index.html')

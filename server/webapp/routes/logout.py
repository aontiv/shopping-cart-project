from webapp.server import app
from flask import session, jsonify
from webapp.db.db_setup import db, Product, Cart

@app.route('/logout')
def logout():
    session.pop('KEY', None)
    return jsonify({ "message": "session closed" })

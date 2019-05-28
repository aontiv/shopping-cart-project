from webapp.server import app
from flask import jsonify, session, redirect

@app.route('/status')
def status():
    if 'KEY' in session:
        return redirect('/session_state')
    else:
        return jsonify({ "message": "not logged in" })

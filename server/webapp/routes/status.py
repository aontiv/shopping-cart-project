from webapp.server import app
from flask import make_response, session

@app.route('/status')
def status():
    if 'KEY' in session:
        return 'logged in'
    else:
        return make_response('not logged in', 204)

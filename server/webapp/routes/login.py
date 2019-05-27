import uuid
from webapp.server import app
from flask import request, session, render_template

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['KEY'] = str(uuid.uuid4())
        return 'logged in'
    else:
        return render_template('index.html')

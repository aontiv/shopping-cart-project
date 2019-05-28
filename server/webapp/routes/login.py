import uuid
from webapp.server import app
from flask import request, session, render_template, redirect

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['KEY'] = str(uuid.uuid4())
        return redirect('/get_products')
    else:
        return render_template('index.html')

import uuid
from flask import Flask

app = Flask(__name__, template_folder='./dist', static_folder='./dist/static')

app.secret_key = uuid.uuid4().bytes

import webapp.routes.main
import webapp.routes.status
import webapp.routes.login
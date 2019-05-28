import uuid
from flask import Flask

app = Flask(__name__, template_folder='./dist', static_folder='./dist/static')
app.secret_key = uuid.uuid4().bytes

from webapp.routes import (
    add_item,
    decrement_cart,
    decrement_inventory,
    delete_item,
    increment_cart,
    increment_inventory,
    login,
    logout,
    main,
    restore_inventory,
    session_state,
    status
)

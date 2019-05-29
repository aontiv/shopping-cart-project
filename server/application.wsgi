import sys
sys.path.insert(0, '/var/www/shopping-cart-project')

from webapp.server import app as application

if __name__ == '__main__':
    app.env = 'development'
    app.debug = True
    app.run()

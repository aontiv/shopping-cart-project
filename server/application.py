from webapp.server import app

if __name__ == '__main__':
    app.env = 'development'
    app.debug = True
    app.run()

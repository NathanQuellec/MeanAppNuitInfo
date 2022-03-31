from flask_script import manager
from brique_ML import app
from brique_ML.config import APP_CONFIG

# Init app manager
manager = Manager(app)

@manager.command
def run(host=APP_CONFIG["HOST"],
        port=APP_CONFIG["PORT"],
        debug=APP_CONFIG["DEBUG"]):
    """ Run Flask server """
    try:
        # Cast port to int, then run app
        port = int(port) if isinstance(port, str) else port
        app.run(host=host, port=port, debug=APP_CONFIG.get("DEBUG"))
    # Raise error
    except: raise

if __name__ == "__main__":
    manager.run()
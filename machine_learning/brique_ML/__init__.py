from .config import APP_CONFIG, LOG_CONFIG
import logging
from flask import Flask

# Init and configure logging
logging.root.handlers = []
logging.basicConfig(**LOG_CONFIG)

# Redifine create_app of Flask to include our custom config
def create_app(app_name, app_config={}):
    """ Create and configure Flask app """
    app = Flask(app_name)
    with app.app_context():
        app.config.from_mapping(**app_config)
        print("App configured succesfully !")
        return app

# Create app
app = create_app(
    app_config=__name__,
    app_config=APP_CONFIG
)
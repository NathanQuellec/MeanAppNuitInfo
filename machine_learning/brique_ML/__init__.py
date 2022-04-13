from importlib import import_module
from .config import APP_CONFIG, LOG_CONFIG
import logging
from flask import Flask
import os
from os.path import join

# Init and configure logging
logging.root.handlers = []
logging.basicConfig(**LOG_CONFIG)

# Redifine create_app of Flask to include our custom config
def create_app(app_name, app_config={}):
    """ Create and configure Flask app """
    app = Flask(app_name)
    with app.app_context():
        app.config.from_mapping(**app_config)
        print("App configured successfully !")
        return app
# Redifine register_blueprint to register routes services
def register_blueprints(app, routes_dir="."):
    """
    Dynamic blueprints loading.
    :param app: Flask app.
    :param route_dir: Path to routes directory.
    """
    # Get all route files
    routes = [content[:-3] for content in os.listdir(routes_dir)
              if os.path.isfile(os.path.join(routes_dir, content))
              and content.endswith(".py")
              and content != "__init__.py"]
    # Processing for each route module
    for route_file in routes:
        try:
            # Replace OS separator with "."
            routes_dir = routes_dir.replace(os.path.sep, ".")
            # Module to import
            route_path = ".".join([routes_dir, route_file])
            # Import route module
            route = import_module(route_path)
            # Register blueprint
            app.register_blueprint(
                blueprint=route.blueprint,
                url_prefix=route.url_prefix
            )
            # Print success message
            message = "Module [{}] loaded successfully !"
            print(message.format(route_file))
        except: raise

# Create app
app = create_app(
    app_name=__name__,
    app_config=APP_CONFIG
)

# Register blueprints
register_blueprints(app=app, routes_dir=join("brique_ML", "routes"))
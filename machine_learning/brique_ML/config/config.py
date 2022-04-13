import os
import logging

# App config
APP_CONFIG = {
    # Server config
    "HOST": os.getenv("BRIQUE_ML_HOST", "0.0.0.0"),
    "PORT": os.getenv("BRIQUE_ML_PORT", 5000),
    "DEBUG": os.getenv("BRIQUE_ML_DEBUG", False)
}

# Log message config
LOG_CONFIG = {
    "format": "%(asctime)s %(message)s",
    "datefmt": "%d/%m/%Y %H:%M:%S",
    "filename": "brique_ML.log",
    "level": logging.INFO
}

# Path to models
PATH_MODELS = {
    "strokes": ""
}
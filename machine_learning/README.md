# Purpose of the module

This module exposed differents ML services. 
More precisely, the main goal is for model inference. 
Each ML models of the project will do prediction on the user's data.
This module will host all models and have differents routes to call them.

# Module architecture

machine_learning
└──brique_ML
        └── ML_models                 # Folder with ML models saved as .joblib
        └── routes                    # Folder with routes towards exposed services
        └── config                    # For configuration
        └──__init__.py                # Starting point of package brique_ML
├── brique_ML.log                     # Log file of module
├── Dockerfile                        # For docker management
├── manage.py                         # file to launch the module

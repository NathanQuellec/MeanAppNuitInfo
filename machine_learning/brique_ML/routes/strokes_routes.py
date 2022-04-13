from flask import Blueprint, request, jsonify
import joblib
from  ..config import PATH_MODELS
import numpy as np
import pandas as pd
import json
import os

# Create Blueprint
url_prefix = "/strokes"
blueprint = Blueprint("strokes", __name__)

# Import the model
model_reglog_smote = joblib.load(filename='brique_ML/ML_models/model-stroke-forest-undersample.sav')

@blueprint.route("/test", methods=["POST", "GET"])
def strokes_test():
    # Return value for health check
    if request.method == "GET" : 
        return jsonify({"Message":"Ici on test si on risque une attaque !"}), 200
    else:
        input_data = request.get_json()
        raw_value = input_data["value"]
        # On doit convertir les données en array à 2 dim
        array = np.array([raw_value])
        # Pour spécifier les colonnes
        col_name = ["gender","age","hypertension","heart_disease","ever_married","work_type","Residence_type","avg_glucose_level","bmi","smoking_status"]
        # Création du dataframe
        df = pd.DataFrame(data=array,columns=col_name)
        # Prediction par le modèle
        prediction = model_reglog_smote.predict_proba(df)
        # Recupération de la prédiction et de son score
        resultat = np.argmax(prediction)
        score = np.amax(prediction)
        # Construction du message de retour
        message = {
            "prediction":str(resultat),
            "score":str(score)
        }
        return jsonify(message), 200
from flask import Blueprint, request, jsonify
import joblib
from  ..config import PATH_MODELS
import numpy as np
import pandas as pd
import json
import os

# Create Blueprint
url_prefix = "/heart"
blueprint = Blueprint("heart", __name__)

# Import the model
model_heart = joblib.load(filename='brique_ML/ML_models/model-heart-forest.sav')

@blueprint.route("/test", methods=["POST", "GET"])
def strokes_test():
    # Return value for health check
    if request.method == "GET" : 
        return jsonify({"Message":"Ici on test si on risque d'avoir du biabete !"}), 200
    else:
        input_data = request.get_json()
        raw_value = input_data["value"]
        # On doit convertir les données en array à 2 dim
        array = np.array([raw_value])
        # Pour spécifier les colonnes
        col_name = ["Age","Sex","ChestPainType","RestingBP","Cholesterol","FastingBS","RestingECG","MaxHR","ExerciseAngina","Oldpeak","ST_Slope"]
        # Création du dataframe
        df = pd.DataFrame(data=array,columns=col_name)
        # Prediction par le modèle
        prediction = model_heart.predict_proba(df)
        # Recupération de la prédiction et de son score
        #resultat = np.argmax(prediction)
        #score = np.amax(prediction)
        score = prediction[0][1]
        # Construction du message de retour
        message = {
            "prediction":"1",
            "score":str(score)
        }
        return jsonify(message), 200
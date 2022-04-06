from flask import Blueprint, request, jsonify

# Create Blueprint
url_prefix = "/health-check"
blueprint = Blueprint("health-check", __name__)

@blueprint.route("/", methods=["POST", "GET"])
def health_check():
    # Return value for health check
    if request.method == "GET" : 
        return jsonify({"Flask": "Machine Learning component works !"}), 200
    else:
        input_data = request.get_json()
        return jsonify("Les informations envoyés : ", input_data), 200
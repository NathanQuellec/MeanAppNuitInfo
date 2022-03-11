from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/test", methods=['POST', 'GET'])
def test():
    # If method GET, send error message
    if request.method == "GET" : 
        return jsonify("Method type error")
    else:
        input_data = request.get_json()
        return jsonify("Les informations envoyés : ", input_data)
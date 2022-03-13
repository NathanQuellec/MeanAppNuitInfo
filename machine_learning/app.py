from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST', 'GET'])
def test():
    # If method GET, send error message
    if request.method == "GET" : 
        #response = jsonify("Machine Learning component works !"), 200
        #response.headers.add('Access-Control-Allow-Origin', '*')
        return jsonify({"Flask": "Machine Learning component works !"}), 200
    else:
        input_data = request.get_json()
        return jsonify("Les informations envoyés : ", input_data)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
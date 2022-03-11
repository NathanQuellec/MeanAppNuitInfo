from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/test", methods=['POST', 'GET'])
def test():
    # If method GET, send error message
    if request.method == "GET" : 
        response = jsonify("Machine Learning component works !"), 200
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    else:
        input_data = request.get_json()
        return jsonify("Les informations envoyés : ", input_data)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
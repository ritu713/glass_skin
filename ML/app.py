from flask import Flask, request, jsonify
import json
from flask_cors import CORS
from dotenv import load_dotenv
import os
from skincare_recommender import recommend_essentials
from middleware import verify_token

app = Flask(__name__)
load_dotenv()
# cors = CORS(app, resources={r"/recommend_products": {"origins": os.getenv("FRONTEND_URL")}}, supports_credentials=True)
CORS(app, supports_credentials=True)

@app.route("/", methods=['GET'])
def fun():
    return jsonify({"message" : "Server up and running!"}), 200


@app.route('/recommendation_model', methods=['POST'])
# @verify_token
def recommendations():
    try:
        input = request.json
        prods = recommend_essentials(vector = input)
        return jsonify({"message" : json.dumps(prods)})
    except Exception as e:
        return jsonify({'message' : str(e)}),  500


if(__name__ == '__main__'):
    app.run(debug=True)
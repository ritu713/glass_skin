from flask import request, jsonify
import os
# from dotenv import load_dotenv
from functools import wraps
import jwt

# load_dotenv()

def verify_token(func):
    @wraps(func)
    def decorated_function():
        token = request.cookies.get("auth_token")
        # print("HEaders ", request.headers)
        print("cookies all", request.cookies)
        # print("Token" ,token)
        if not token:
            return jsonify({"message" : "Unauthorised"}), 401
        
        try:
            decoded_cookie = jwt.decode(token, os.getenv("JWT_SECRET_KEY"))
            request.userID = decoded_cookie.get('userID')
            next()
        except Exception as e:
            return jsonify({"message" : "Unauthorised"}), 401
        return func()
    return decorated_function
        

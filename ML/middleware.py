from flask import request, jsonify
from functools import wraps
import os

def verify_origin(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if os.getenv('NODE_URL') == request.headers.get("Requester"):
            return f(*args, **kwargs)
        else:
            # print("WRONG")
            return jsonify({"message" : "Unauthorized"}), 403
    return decorated_function

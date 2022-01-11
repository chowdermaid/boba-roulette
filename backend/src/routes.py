# external imports
from flask import Flask, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from flask_restx import fields
from flask_restx import reqparse
from flask_restx import Resource, Api

app = Flask(__name__)
port_num = 9099
api = Api(app)
CORS(app)

class HelloWorld(Resource):
    def get(self):
        return {'hello': 'world'}

api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.config['ERROR_404_HELP'] = False
    app.run(debug=True, port=port_num)

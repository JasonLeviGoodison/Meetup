var mongo = require('mongoose');
//var MongoClient = mongo.MongoClient;
const server = 'localhost:27017'
const database = 'accounts'
const user = '';//'jason'
const password = '';//'goodison'

mongo.connect(`mongodb://localhost:27017/accounts`).catch( err => {
    console.log(err);
});

var schema = new mongo.Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true
    },
    accessToken: {
        type: String,
        require: true
    },
    id: String,
    courses: [String]
});
module.exports = mongo.model('users', schema);
// var url = 'mongodb://localhost:27017/meetupdb';
let UserModel = require('../models/users.model');

module.exports.updateCourses = function(body, res) {
    if ( !body ) {
        return res.send(400).send("Request body is missing");
    }
    let model = new UserModel(body)
    let { email } = body;
    UserModel.findOneAndUpdate(
        {email},
        body,
        {new: true}
    )
    .then( doc => {
        res.status(201).send(doc);
    })
    .catch( err => {
        res.status(500).json(err);
    });
}

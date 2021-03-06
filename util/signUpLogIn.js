let UserModel = require('../models/users.model');

module.exports.signUpLogIn = function(body, res) {
    if ( !body ) {
        return res.send(400).send("Request body is missing");
    }
    let model = new UserModel(body)
    model.save()
    .then( doc => {
        if (!doc || doc.length === 0) {
            return res.status(500).send(doc);
        }
        res.status(201).send(doc);
    })
    .catch( err => {
        res.status(500).json(err);
    })
}

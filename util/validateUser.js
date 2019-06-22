let UserModel = require('../models/users.model');
var { app_access } = require('../app_secret.js');
const axios = require('axios');

module.exports.validateUser = function(body, res) {
    let { user_token } = body;
    // app access token

    let url = "https://graph.facebook.com/debug_token?input_token=" + user_token + "&access_token=" + app_access;
    return axios.get( url ).then( result => {
        if (!(result.data && result.data.data)) throw 'err';
        let { is_valid } = result.data.data;
        res.status(201).send( is_valid );
    }).catch (err => {
        console.error(err);
    });

}

let UserModel = require('../models/users.model');
var { app_secret, app_access } = require('../app_secret.js');
const axios = require('axios');

//TODO remove this from the application
let app_id = 263597774312502;
module.exports.validateUser = function(body, res) {
    let { user_token } = body;
    // app access token
    //console.log("app_access", app_access)
    //console.log("user_token", user_token)

    let url = "https://graph.facebook.com/debug_token?input_token=" + user_token + "&access_token=" + app_access;
    //console.log(url)
    return axios.get( url ).then( result => {
        if (!(result.data && result.data.data)) throw 'err';
        console.log(result)
        let { is_valid } = result.data.data;
        res.status(201).send( is_valid );
    }).catch (err => {
        console.error(err);
    });

}

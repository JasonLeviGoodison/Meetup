var express = require('express');
var router = express.Router();

var { signUpLogIn } = require('../util/signUpLogIn');
var { updateCourses } = require('../util/updateCourses');
var { validateUser } = require('../util/validateUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// STRUCTURE OF THE USER
// status:
// accessToken:
// email:
// id:
// name:
// userId
router.post('/login', function(req, res) {
  //TODO throws error if already in the system, places them in if not
  signUpLogIn(req.body, res);
});


router.put('/updateCourses', function(req, res) {
  updateCourses(req.body, res);
});

router.get('/testValidate', function (req, res ) {
  validateUser(req.query, res);
});

module.exports = router;

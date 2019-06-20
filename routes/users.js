var express = require('express');
var router = express.Router();

var { signUpLogIn } = require('../util/signUpLogIn')
var { updateCourses } = require('../util/updateCourses')

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
  let {
    status
  } = req.body;
  if (status != 'UPDATE') {
    res.status(400).send('This endpoint is for updating');
  }
  updateCourses(req.body, res);
});

module.exports = router;

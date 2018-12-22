var express = require('express');
var router = express.Router();

var { userLoginValid } = require('../util/userLoginValid')
var { updateCourses } = require('../util/updateCourses')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  let {
    status,
    accessToken,
    email,
    id,
    name,
    userID
  } = req.body;

  // from here we should validate that the log in information is valid
  // save it and log the lad in

  if (!userLoginValid(email, userID, accessToken)) {
    res.send({status: 'FAIlURE'});
  }

  res.send({accessToken, status: 'ACCEPT', action: 'SIGNED_UP'});
});


router.post('/updateCourses', function(req, res) {
  let {
    courses = [],
    accessToken,
    userID,
    sessionId = '' // sessionId not implemented yet
  } = req.body;

  console.log(req.body)

  // validate that the userId is also the one the sessionId is for

  // call db to actually save courses for user
  let result = updateCourses(accessToken, sessionId, courses);

  if (result) {
    res.send({status: 'ACCEPT', action: 'UPDATE_COURSES'});
  } else {
    res.send({status: 'FAILURE', action: 'UPDATE_COURSES'});
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
const User = require('../controllers/users_controller.js')

/* GET users listing. */
router.post('/signin', User.signIn)
router.post('/signup', User.signUp)

module.exports = router;

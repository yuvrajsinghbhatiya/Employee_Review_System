
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller');

// get home page
router.get('/', passport.checkAuthentication, userController.home);


// get admin page
router.use('/users', require('./user'));


// get admin page
router.use('/admin', require('./admin'));


// get admin page
router.use('/reviews', require('./review'));


module.exports = router;
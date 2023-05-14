
const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../controllers/user_controller')


// get home page
router.get('/login', userController.login);

// get register page
router.get('/register', userController.register);

// get add new employee page
router.get('/addnewemployee', userController.addnewemployee);

// get logout page
router.get('/logout', userController.destroySession);

// get create user page
router.post('/create-user', userController.createUser);

router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect : '/users/login'}
), userController.createSession);

module.exports = router;
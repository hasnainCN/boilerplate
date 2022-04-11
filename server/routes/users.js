const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

const { auth } = require('../middleware/auth');
const {
  authController,
  registerController,
  loginController,
  logoutController,
} = require('../controllers/user');

//=================================
//             User
//=================================

router.post('/register', registerController);

router.post('/login', loginController);

router.get('/auth', auth, authController);

router.get('/logout', auth, logoutController);

module.exports = router;

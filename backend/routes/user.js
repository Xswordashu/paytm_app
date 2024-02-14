const express = require('express');
const router = express.Router();
const {userSignUp} = require('../controllers/userController');
router.post("/sign_up", userSignUp);

module.exports = router;
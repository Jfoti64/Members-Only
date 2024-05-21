const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');

router.get('/', signUpController.user_create_get);
router.post('/', signUpController.user_create_post);

module.exports = router;

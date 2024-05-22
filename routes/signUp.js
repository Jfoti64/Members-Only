const express = require('express');
const router = express.Router();
const signUpController = require('../controllers/signUpController');
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

router.get('/', signUpController.user_create_get, csrfProtection);
router.post('/', signUpController.user_create_post, csrfProtection);

module.exports = router;

const express = require('express');
const router = express.Router();
const logInController = require('../controllers/logInController');
const csrf = require('csurf');

// CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

router.get('/', logInController.user_login_get, csrfProtection);
router.post('/', logInController.user_login_post, csrfProtection);

module.exports = router;

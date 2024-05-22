const express = require('express');
const router = express.Router();
const logOutController = require('../controllers/logOutController');
const csrf = require('csurf');

// CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

router.get('/', logOutController.user_logout_get, csrfProtection);

module.exports = router;

const express = require('express');
const indexController = require('../controllers/indexController');
const router = express.Router();
const csrf = require('csurf');

// CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

/* GET home page. */
router.get('/', indexController.index_get, csrfProtection);

module.exports = router;

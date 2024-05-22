const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

/* GET users listing. */
router.get('/', csrfProtection, function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const logOutController = require('../controllers/logOutController');

router.get('/', logOutController.user_logout_get);

module.exports = router;

const express = require('express');
const router = express.Router();
const logInController = require('../controllers/logInController');

router.get('/', logInController.user_login_get);
router.post('/', logInController.user_login_post);

module.exports = router;

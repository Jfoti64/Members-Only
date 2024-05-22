const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Middleware to ensure the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/log-in');
}

router.get('/', ensureAuthenticated, messageController.message_get);
router.post('/', ensureAuthenticated, messageController.message_post);

module.exports = router;

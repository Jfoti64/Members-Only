const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

// Middleware to ensure the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/log-in');
}

router.post('/delete/:id', ensureAuthenticated, csrfProtection, messageController.message_delete_post);
router.get('/', ensureAuthenticated, csrfProtection, messageController.message_get);
router.post('/', ensureAuthenticated, csrfProtection, messageController.message_post);

module.exports = router;

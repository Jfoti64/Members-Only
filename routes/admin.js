const express = require('express');
const router = express.Router();
const User = require('../models/user');
const csrf = require('csurf');

// CSRF protection middleware
const csrfProtection = csrf({ cookie: true });

// Middleware to ensure the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/log-in');
}

// Route to handle admin status change
router.post('/set-admin', ensureAuthenticated, csrfProtection, async (req, res) => {
  try {
    const user = req.user;
    user.admin = !!req.body.admin;
    await user.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error setting admin status');
  }
});

module.exports = router;

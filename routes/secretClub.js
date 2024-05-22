const express = require('express');
const secretClubController = require('../controllers/secretClubController');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

// Middleware to ensure the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/log-in');
}

router.get('/', ensureAuthenticated, csrfProtection, secretClubController.secret_club_get);
router.post('/', ensureAuthenticated, csrfProtection, secretClubController.secret_club_post);

module.exports = router;

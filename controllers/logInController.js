const { body, validationResult } = require("express-validator");
const passport = require('passport');
const asyncHandler = require('express-async-handler');

exports.user_login_get = asyncHandler(async (req, res, next) => {
  res.render('login_form', { title: 'Log In', user_name: '', password: '', errors: [] });
});

exports.user_login_post = [
  body('user_name').trim().isLength({ min: 1 }).escape().withMessage('Username must be specified.'),
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),

  asyncHandler(async (req, res, next) => {
    console.log('Login controller post hit'); // Debug log
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('login_form', {
        title: 'Log In',
        user_name: req.body.user_name,
        password: req.body.password,
        errors: errors.array()
      });
    }

    passport.authenticate('local', (err, user, info) => {
      if (err) {
        console.log('Error during authentication:', err);
        return next(err);
      }
      if (!user) {
        console.log('Authentication failed: Invalid username or password');
        return res.render('login_form', {
          title: 'Log In',
          user_name: req.body.user_name,
          password: req.body.password,
          errors: [{ msg: 'Invalid username or password' }]
        });
      }
      req.logIn(user, (err) => {
        if (err) {
          console.log('Error during login:', err);
          return next(err);
        }
        console.log('User logged in successfully');
        return res.redirect('/');
      });
    })(req, res, next);
  })
];

const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const User = require("../models/user");
const asyncHandler = require('express-async-handler');

exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.render('sign_up_form', {
    title: 'Sign Up',
    errors: [], // Ensure `errors` is always defined
  });
});

exports.user_create_post = [
  body('first_name').trim().isLength({ min: 1 }).escape().withMessage('First name must be specified.'),
  body('family_name').trim().isLength({ min: 1 }).escape().withMessage('Family name must be specified.'),
  body('user_name').trim().isLength({ min: 1 }).escape().withMessage('Username must be specified.'),
  body('password').trim().isLength({ min: 1 }).escape().withMessage('Password must be specified.'),
  
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      res.render('sign_up_form', {
        title: 'Sign Up',
        user: req.body,
        errors: errors.array()
      });
      return;
    }

    bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
      if (err) {
        return next(err);
      }
      try {
        const user = new User({
          first_name: req.body.first_name,
          family_name: req.body.family_name,
          user_name: req.body.user_name,
          password: hashedPassword,
          membership_status: req.body.membership_status || false
        });
        await user.save();
        res.redirect("/");
      } catch (err) {
        return next(err);
      }
    });
  })
];

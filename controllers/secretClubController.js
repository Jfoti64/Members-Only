const asyncHandler = require('express-async-handler');
const { body, validationResult } = require("express-validator");

exports.secret_club_get = asyncHandler(async (req, res, next) => {
  try {
    res.render('secret_club', { title: 'Secret Club', errors: [] });
  } catch (err) {
    next(err);
  }
});

exports.secret_club_post = [
  body('passcode').trim().isLength({ min: 1 }).escape().withMessage('Passcode must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('secret_club', {
        title: 'Secret Club',
        errors: errors.array()
      });
    }

    if (req.body.passcode !== process.env.SECRET_PASSCODE) {
      return res.render('secret_club', {
        title: 'Secret Club',
        errors: [{ msg: 'Incorrect passcode' }]
      });
    }

    // Update membership status
    req.user.membership_status = true;
    await req.user.save();  // Save the updated user document

    res.redirect('/');
  })
];

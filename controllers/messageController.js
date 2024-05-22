const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const asyncHandler = require('express-async-handler');

exports.message_get = asyncHandler(async (req, res, next) => {
  res.render('message_form', { title: 'Create Message', errors: [] });
});

exports.message_post = [
  body('message_title').trim().isLength({ min: 1 }).escape().withMessage('Message title must be specified.'),
  body('message_text').trim().isLength({ min: 1 }).escape().withMessage('Message text must be specified.'),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('message_form', {
        title: 'Create Message',
        message_title: req.body.message_title,
        message_text: req.body.message_text,
        errors: errors.array()
      });
    }

    try {
      const message = new Message({
        title: req.body.message_title,
        message_text: req.body.message_text,
        user: req.user._id
      });
      await message.save();
      res.redirect('/');
    } catch (err) {
      return next(err);
    }
  })
];

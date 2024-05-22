const { body, validationResult } = require("express-validator");
const asyncHandler = require('express-async-handler');
const Message = require("../models/message");

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

    const message = new Message({
      title: req.body.message_title,
      text: req.body.message_text,
      user: req.user._id
    });
    await message.save();

    return res.redirect('/');
  })
];
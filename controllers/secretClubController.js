const asyncHandler = require('express-async-handler');
const moment = require('moment');

exports.secret_club_get = asyncHandler(async (req, res, next) => {
  try {
    res.render('secret_club', { title: 'Secret Club',  errors: [] });
  } catch (err) {
    next(err);
  }
});

exports.secret_club_post = asyncHandler(async (req, res, next) => {
  try {
    res.render('secret_club', { title: 'Secret Club',  errors: [] });
  } catch (err) {
    next(err);
  }
});

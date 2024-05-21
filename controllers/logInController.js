const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const User = require("../models/user");
const asyncHandler = require('express-async-handler');

exports.user_login_get = asyncHandler(async (req, res, next) => {
  res.render('login_form', {
    title: 'Log In',
    user_name: '',
    password: '',
    errors: [], // Ensure `errors` is always defined
  });
});

exports.user_login_post = asyncHandler(async (req, res, next) => {res.redirect('/')});



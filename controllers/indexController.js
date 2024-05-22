const { decodeHtmlEntities } = require('../helpers');
const Message = require("../models/message");
const asyncHandler = require('express-async-handler');
const moment = require('moment');

exports.index_get = asyncHandler(async (req, res, next) => {
  try {
    const messages = await Message.find().populate('user').sort({ timestamp: -1 }).exec();
    res.render('index', {
       title: 'Home Page', 
       message_list: messages, 
       moment: moment,
       decodeHtmlEntities
    });
  } catch (err) {
    next(err);
  }
});

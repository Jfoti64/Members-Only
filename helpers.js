const { decode } = require('html-entities');

function decodeHtmlEntities(text) {
  return decode(text);
}

module.exports = {
  decodeHtmlEntities,
};

'use strict';

module.exports = (req, res, next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  console.log(error);
  res.render('404-error.ejs');
};
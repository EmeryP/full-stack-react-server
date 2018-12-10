'use strict';

export default (err,req,res,next) => {
  console.error(err);

  let error = {error:err};
  console.log(error);
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.render('error.ejs')
};
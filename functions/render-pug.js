const pug = require('pug');

module.exports = function (context,cb) {
  //store our pug
  const puggy = context.body.pug;
  //compile our pug
  const compiledFunction = pug.render(puggy);

  cb(null, {compiledFunction});
};

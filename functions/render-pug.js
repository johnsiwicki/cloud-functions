var pug = require('pug');
exports.handler = function(event, context, callback) {
  //store our pug
  const puggy = context.body.pug;
  //compile our pug
  const compiledFunction = pug.render(puggy);

  callback(null, {compiledFunction});
};

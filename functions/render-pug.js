exports.handler = function(event, context, callback) {
  const pug = require('pug');
  //store our pug
  const puggy = context.body.pug;
  //compile our pug
  const compiledFunction = pug.render(puggy);

  callback(null, {compiledFunction});
};

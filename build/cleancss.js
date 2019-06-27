 var CleanCSS = require('clean-css');

exports.handler = function(event, context, callback) {
  var input = 'a{font-weight:bold;}';
  var options = { /* options */ };
  var output = new CleanCSS(options).minify(input);
 
              callback(null, {
                statusCode: 200,
                body: JSON.stringify(output)
                });
}

 var CleanCSS = require('clean-css');

exports.handler = function(event, context, callback) {
 
  var input = 'a{font-weight:bold;}';
  var options = { /* options */ };
  var output =  new CleanCSS().minify(['https://a80427d48f9b9f165d8d-c913073b3759fb31d6b728a919676eab.ssl.cf1.rackcdn.com/v3/colorbox/colorbox.css', 'https://cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css']);
 
              callback(null, {
                statusCode: 200,
                body: JSON.stringify(output)
                });
}

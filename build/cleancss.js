var CleanCSS = require('clean-css');

exports.handler = function(event, context, callback) {
     var options = { /* options */ };
     var source = '@import url(https://a80427d48f9b9f165d8d-c913073b3759fb31d6b728a919676eab.ssl.cf1.rackcdn.com/v3/colorbox/colorbox.css);';
    new CleanCSS({ inline: ['remote'] }).minify(source, function (error, output) {
    // output.styles
     callback(null, {
                statusCode: 200,
                body: JSON.stringify(output)
                });
     
 });
 
              
}



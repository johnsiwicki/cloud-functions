const posthtml = require('posthtml');

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result =  
        posthtml([
      		require('posthtml-custom-elements')(),
      		require('posthtml-alt-always')(),
      		require('posthtml-include')(),
          require('posthtml-minifier')(
            { removeComments: true, 
              removeScriptTypeAttributes: true, 
              collapseWhitespace: true
            })
      	]).process(bEmail, { sync: true })
          .html;
    
    cb(null, {result});
  
};

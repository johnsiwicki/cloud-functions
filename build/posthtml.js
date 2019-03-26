const posthtml = require('posthtml');
const posthtmlce = require('posthtml-custom-elements');
const posthtmlalt = require('posthtml-alt-always');
const posthtmlinc = require('posthtml-include');

  exports.handler = function (event, context, callback) {
  const bEmail = context.body.email;
  const result =  
        posthtml([
      		posthtmlce(),
      		posthtmlalt(),
      		posthtmlinc()
      	]).process(bEmail, { sync: true })
          .html;
    
    callback(null, {
      result
    });
  
};

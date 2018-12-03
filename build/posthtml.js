const posthtml = require('posthtml');
const posthtmlce = require('posthtml-custom-elements');
const posthtmlalt = require('posthtml-alt-always');
const posthtmlinc = require('posthtml-include');

module.exports = function (context,cb) {
  
  const bEmail = context.body.email;
  const result =  
        posthtml([
      		posthtmlce(),
      		posthtmlalt(),
      		posthtmlinc()
      	]).process(bEmail, { sync: true })
          .html;
    
    cb(null, {result});
  
};

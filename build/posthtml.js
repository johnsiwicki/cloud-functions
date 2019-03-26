import posthtml from "posthtml";
import posthtmlce from "posthtml-custom-elements";
import posthtmlalt from "posthtml-alt-always";
import posthtmlinc from "posthtml-include";

exports.handler = function (event, context, callback) {
    console.log(context.body.email);
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

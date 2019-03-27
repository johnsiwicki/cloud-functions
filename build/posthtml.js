import posthtml from "posthtml";
import posthtmlce from "posthtml-custom-elements";
import posthtmlalt from "posthtml-alt-always";
import posthtmlinc from "posthtml-include";

exports.handler = function (event, context, callback) {
  console.log(event);
  const bEmail = event.body;
  const result =  
        posthtml([
      		posthtmlce(),
      		posthtmlalt(),
      		posthtmlinc()
      	]).process(bEmail)
          .html;
    
    callback(null, {
      result
    });
  
};
import posthtml from "posthtml";
import posthtmlce from "posthtml-custom-elements";
import posthtmlalt from "posthtml-alt-always";
import posthtmlinc from "posthtml-include";

exports.handler = function (event, context, callback) {
  const bEmail = decodeURI(event.body);
  console.log(event.body);
  console.log(bEmail);
  const result =  
        posthtml([
      		posthtmlce(),
      		posthtmlalt(),
      		posthtmlinc()
      	]).process(bEmail, {
      	  sync: true
      	})
          .html;
        callback(null, {
          statusCode: 200,
          body: result,
        });
  
};
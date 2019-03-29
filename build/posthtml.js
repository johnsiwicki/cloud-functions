import posthtml from "posthtml";
import posthtmlce from "posthtml-custom-elements";
import posthtmlalt from "posthtml-alt-always";
import posthtmlinc from "posthtml-include";

exports.handler = function (event, context, callback) {

var postH = event.body;
var wanted_text = postH.split("body=")[1];
const data = JSON.parse(JSON.stringify(wanted_text));

 console.log('data', data)

var bEmail = decodeURI(data);
 
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



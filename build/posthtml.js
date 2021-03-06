import posthtml from "posthtml";
import posthtmlce from "posthtml-custom-elements";
import posthtmlalt from "posthtml-alt-always";
import posthtmlinc from "posthtml-include";

exports.handler = function (event, context, callback) {
console.log('event', event)
  //get html from post 
var postH = event.body;
//remove body
//var wanted_text = postH.split("body=")[1];
//encode our data 
var encodeText = decodeURIComponent(postH);
const data = JSON.parse(JSON.stringify(encodeText));

console.log('data', data)

var bEmail =  data;
 
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
           headers: {
             'Access-Control-Allow-Origin': '*',
           },
           body: JSON.stringify({
             result
           })
         })
  
};



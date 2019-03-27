import postcss from "postcss";
import cssvariables from "postcss-css-variables";
import pFor from "postcss-for";
import clean from "postcss-clean";

exports.handler = function(event, context, callback) {

			const mycss = event.body;
			
			var output = postcss([
				cssvariables(/*options*/),
				pFor(),
				clean()
			])
			.process(mycss)
			.css;

			   console.log(output);
	
  callback(null, {
  statusCode: 200,
  	body: JSON.stringify(output)
  });
};

 

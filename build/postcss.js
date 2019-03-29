import postcss from "postcss";
import cssvariables from "postcss-css-variables";
 

exports.handler = function(event, context, callback) {
			const mycss = event.body;		
			var output = postcss([
				cssvariables(),
			]).process(mycss).css;
			return callback(null, {
				statusCode: 200,
				body: JSON.stringify(output),
			});
};

 

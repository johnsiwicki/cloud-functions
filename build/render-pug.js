import pug from "pug";

exports.handler = function(event, context, callback) {
  //store our pug
  const puggy = event.body;
  //compile our pug
  const compiledFunction = pug.render(puggy);
  console.log(compiledFunction);
  	callback(null, {
  	  statusCode: 200,
  	  //body: JSON.stringify(output);
  	  body: compiledFunction
  	});
};

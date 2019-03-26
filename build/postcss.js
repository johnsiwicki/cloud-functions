import postcss from "postcss";
import cssvariables from "postcss-css-variables";
import pFor from "postcss-for";
import clean from "postcss-clean";

exports.handler = function(event, context, callback) {
  const mycss = context.body.pCSS;
  
  var output = postcss([
		cssvariables(/*options*/),
		pFor(),
		clean()
	])
	.process(mycss)
	.css;
	
  callback(null, {output});

};

 

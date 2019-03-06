import postcss from "postcss";
import cssvariables from 'postcss-css-variables';
import fs from 'fs';

exports.handler = async (event, context, callback) => {
	console.log(event);
	console.log(context);
	
  const mycss = event.body;
  
   var output = postcss([
		cssvariables(/*options*/)
	])
	.process(mycss)
	.css;
 
    callback(null, {output});
};

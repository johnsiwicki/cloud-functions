import postcss from "postcss";
import cssvariables from 'postcss-css-variables';
import fs from 'fs';

exports.handler = async (event, context, callback) => {
  const mycss = context.body.pCSS;
  
   var output = postcss([
		cssvariables(/*options*/)
	])
	.process(mycss)
	.css;
 
    cb(null, {output});
};

import postcss from "postcss";
import cssvariables from 'postcss-css-variables';
import fs from 'fs';

exports.handler = async (event, context, callback) => {
	console.clear();
	//log what we see in Netlify
	console.log(event);	
       const mycss =  event.body; 

//process our files
   var output = postcss([cssvariables()]).process(mycss).css;
  
	console.log(output);

	
	//send it back 
	callback(null,output)

	
	
};

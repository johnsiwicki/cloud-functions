const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '2592000',
  'Access-Control-Allow-Credentials': 'true',
};


import postcss from "postcss";
import cssvariables from 'postcss-css-variables';
import fs from "fs";


exports.handler = (event, context, callback) => {
	console.clear();
	//log what we see in Netlify
	console.log(event);	
       const mycss =  event.body; 

//process our files
   var output = postcss([cssvariables()]).process(mycss).css;
	
 
  
	console.log(output);

	
	//send it back 
	  callback(null, {
                  statusCode: 200,
                  body: JSON.stringify({
                        output
                  }),
                  headers,
            });
	
	

	
	
};


const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const pFor = require('postcss-for');
const clean = require('postcss-clean');


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

 

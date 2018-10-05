
const postcss = require('postcss');
const cssvariables = require('postcss-css-variables');
const pFor = require('postcss-for');
const clean = require('postcss-clean');

module.exports = function(context, cb) {
  const mycss = context.body.pCSS;
  
  var output = postcss([
		cssvariables(/*options*/),
		pFor(),
		clean()
	])
	.process(mycss)
	.css;
	
  cb(null, {output});

};

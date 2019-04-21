exports.handler = function(event, context, callback) {
    var url = 'https://api.airtable.com/v0/app942GISbGAKfB4f/Errors';
    console.log(event.body);
    var eventDetails = event.body;

      // convert everything to string
      var nUrl = eventDetails.url.toString();
      var nLine = eventDetails.linenumber.toString();
      var msg = eventDetails.msg;

    var data = {    
        Error: msg,
        URL: nUrl,
        Line: nLine
        };

    fetch(url, {
		method: 'POST', // or 'PUT'
		body: JSON.stringify(data), // data can be `string` or {object}!
		headers:{
			'Content-Type': 'application/json'
		}
	}).then(res => res.json())
	.then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error));
    
 

}

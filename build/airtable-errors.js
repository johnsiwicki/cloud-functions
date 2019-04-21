import fetch from "node-fetch"

exports.handler = function(event, context, callback) {
    var url = 'https://api.airtable.com/v0/app942GISbGAKfB4f/Errors';
   
    var eventDetails = JSON.parse(event.body);
    console.log(eventDetails);
      // convert everything to string
      var nUrl = eventDetails.url;
      var nLine = eventDetails.linenumber;
      var msg = eventDetails.msg;

    var fields = {    
        Error: msg,
        URL: nUrl,
        Line: nLine
        };

    const { AIRTABLE_API_KEY } = process.env;

    fetch(url, {
        method: 'POST', 
        mode: "no-cors",
		body: JSON.stringify(fields),  
		headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer " + AIRTABLE_API_KEY + "",
		} 
	}).then(res => res.json())
    .then(response => 
            console.log('Success:', JSON.stringify(response))
        )
    .catch(
        error => console.error('Error:', error)
        );

}

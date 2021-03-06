import fetch from "node-fetch"

exports.handler = function(event, context, callback) {
    var url = 'https://api.airtable.com/v0/app942GISbGAKfB4f/Errors';
   
    var eventDetails = JSON.parse(event.body);
    
      // convert everything to string
      var nUrl = eventDetails.url;
      var nLine = eventDetails.linenumber;
      var msg = eventDetails.msg;

    var data = { 
        fields : { 
            Error: msg,
            URL: nUrl,
            Line: nLine 
        } 
    };
    console.log(JSON.stringify(data));
    const { AIRTABLE_API_KEY } = process.env;

    fetch(url, {
        method: 'POST', 
        mode: "no-cors",
		body: JSON.stringify(data),  
		headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer "+ AIRTABLE_API_KEY +"  ",
		} 
	}).then(res => res.json())
    .then(response => 
            console.log('Success:', JSON.stringify(response))
        )
    .catch(
        error => console.error('Error:', error)
        );

}

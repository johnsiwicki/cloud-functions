import Airtable from "airtable";
    //setup our stuff
    const baseID = app942GISbGAKfB4f;
    const AIRTABLE_API_KEY = process.env;

    console.log(AIRTABLE_API_KEY);

exports.handler = function(event, context, callback) {
    //declare new base
    var base = new Airtable({apiKey: AIRTABLE_API_KEY}).base(baseID);
    //log what we post 
    console.log(event.body);
    var eventDetails = event.body;

     // convert everything to string
     var nUrl = eventDetails.url.toString();
     var nLine = eventDetails.linenumber.toString();
     var msg = eventDetails.msg;

    //send to our base
     base('Errors').create({
        "Error message": msg,
        "URL": nUrl,
        "Line": nLine
      }, function(err, record) {
          if (err) { 
                console.error(err); 
                return; 
            }
          console.log(record.getId());
      });

}

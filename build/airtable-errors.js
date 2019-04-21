import Airtable from "airtable";

exports.handler = function(event, context, callback) {

    //setup our stuff
    const baseID = app942GISbGAKfB4f;
    const airapiKey = process.env["AIRTABLE_API_KEY"];

    //declare new base
    var base = new Airtable({apiKey: airapiKey}).base(baseID);
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

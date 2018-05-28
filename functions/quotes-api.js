exports.handler = function(event, context, callback) {
  
 const swanQuotes = [{
    "People who buy things are suckers.",
    "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
    "What the f*ck is a German muffin?!?",
    "I wanna punch you in the face so bad right now."
 }];

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
         swanQuotes
      }
    )
  })
}

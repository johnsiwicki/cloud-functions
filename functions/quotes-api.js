exports.handler = function(event, context, callback) {
  
 const swanQuotes = [
    "People who buy things are suckers.",
    "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
    "What the f*ck is a German muffin?!?",
    "I wanna punch you in the face so bad right now."
 ];

  
 const goldQuotes = [
    "It's a delight to trust somebody so completely.",
    "t's mysterious what attracts you to a person.,
    "I, uh, don't think I'm, y'know, so different than your average, y'know, average.",
    "I love to be directed. They can trust me and go."
 ];
  
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
         swanQuotes
      },
      {
        goldQuotes
      }
    )
  })
}

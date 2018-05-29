exports.handler = function(event, context, callback) {
  
 const swanQuotes = {
    0: "People who buy things are suckers.",
    1: "I'm going to get 12 eggs and part of a dead animal. Dealer's choice. Please and thank you.",
    2: "What the f*ck is a German muffin?!?",
    3: "I wanna punch you in the face so bad right now."
 };

  
 const goldQuotes = {
   0: "It\'s a delight to trust somebody so completely.",
   1: "It\'s mysterious what attracts you to a person.",
   2: "I, uh, don't think I'm, y\'know, so different than your average, y\'know, average.",
   3: "I love to be directed. They can trust me and go."
 };
  
 callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
         swanQuotes,
         goldQuotes
      }
    )
  })
}

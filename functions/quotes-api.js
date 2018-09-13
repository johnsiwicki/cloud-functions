exports.handler = function(event, context, callback) {
  
 const rossQuotes = {
    0: "We don't make mistakes, just happy little accidents.",
    1: "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
    2: "I guess I’m a little weird. I like to talk to trees and animals. That’s okay though; I have more fun than most people",
    3: "wash the brush, just beats the devil out of it.",
    4: "Believe that you can do it cause you can do it.",
    5: "There's nothing in the world that breeds success like success",
    6: "Lets build a happy little cloud.Lets build some happy little trees",
    7: "Now then, let's come right down in here and put some nice big strong arms on these trees. Tree needs an arm too. It'll hold up the weight of the forest. Little bird has to have a place to set there. There he goes...",
    8: "wash the brush, just beats the devil out of it."
 };

 const numb = Math.floor(Math.random() * 8);
  
 callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
         rossQuotes[numb]
      }
    )
  })
}

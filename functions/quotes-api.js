exports.handler = function(event, context, callback) {
  
 const rossQuotes = [
      "We don't make mistakes, just happy little accidents.",
      "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
      "I guess I’m a little weird. I like to talk to trees and animals. That’s okay though; I have more fun than most people",
      "wash the brush, just beats the devil out of it.",
      "Believe that you can do it cause you can do it.",
      "There's nothing in the world that breeds success like success",
      "Lets build a happy little cloud.Lets build some happy little trees",
      "Now then, let's come right down in here and put some nice big strong arms on these trees. Tree needs an arm too. It'll       hold up the weight of the forest. Little bird has to have a place to set there. There he goes...",
      "wash the brush, just beats the devil out of it.",
      "That's a crooked tree. We'll send him to Washington.",
      "In painting you have unlimited power. You have the ability to move mountains. You can bend rivers. But when I get home,        the only thing I have power over is the garbage."
 ];
  
var randomBob = rossQuotes[Math.floor(Math.random()*rossQuotes.length)];


 callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(
      {
         randomBob
      }
    )
  })
}

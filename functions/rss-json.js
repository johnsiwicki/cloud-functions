import rssToJson from "rss-to-json";


exports.handler = async (event, context, callback) => {
    var jsonfeed;
    rssToJson.load('https://codek.tv/feed/', function(err, rss){
        var jsonfeed = rss;
     });
  
    return  {
      statusCode: 200,
      body: jsonfeed
    }
}


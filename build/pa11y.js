import pa11y from "pa11y";


exports.handler = function (event, context, callback) {

    pa11y(event.queryStringParameters.url).then((results) => {
        // Do something with the results

          callback(null, {
              statusCode: 200,
              body: JSON.stringify(results)
          }),
          function(error) { // failure handler
              console.log(error);
          }


    })


}




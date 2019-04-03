import urlMetadata from "url-metadata";


exports.handler = function (event, context, callback) {

    urlMetadata(event.queryStringParameters.url).then(
        function (metadata) { // success handler
            callback(err, {
                statusCode: 200,
                body: JSON.stringify(metadata)
            });
        } )
 
}



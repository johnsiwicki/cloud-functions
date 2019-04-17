import urlMetadata from "url-metadata";


exports.handler = function (event, context, callback) {

    urlMetadata(event.queryStringParameters.url).then(
            callback(err, {
                statusCode: 200,
                body: JSON.stringify(metadata)
            }),
        function (error) { // failure handler
            console.log(error);
        }
    );
 
}



exports.handler = function(event, context, callback) {
  console.log(event)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
         0:  "Clear alcohols are for rich women on diets.",
         1: "Crying: acceptable at funerals and the Grand Canyon."
      }
    )
  })
}

module.exports.getUser = (event, context, callback) => {
  if (event.httpMethod === 'GET' && event.pathParameters.id) {
    const {
      pathParameters: { id },
    } = event
    console.log(id)
  } else {
    callback(null, {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Incorrect function call made. GET request required.',
      }),
    })
  }
}

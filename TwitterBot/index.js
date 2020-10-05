const Twitter = require("twitter");

// Connect to Twitter via the api
const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

// Send a tweet
client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;

    // Tweet body
    console.log(tweet); 
    // Raw response object.
    console.log(response);  
});

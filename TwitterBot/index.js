const Twitter = require("twitter");
const Sheet = require("./sheet");

// Connect to Twitter via the api
const client = new Twitter({
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
});

// Pull the next tweet from a spreadsheet
const sheet = new Sheet();
await sheet.load();
const quotes = sheet.getRows();
// console.log(quotes[0].quote);
const status = quotes[0].quote;

// Send a tweet
client.post('statuses/update', { status },  function(error, tweet, response) {
    if(error) throw error;

    // Tweet body
    console.log(tweet); 
    // Raw response object.
    console.log(response);  
});

// Remove quote from spreadsheet
await quotes[0].delete();
console.log("Tweeted", quotes[0].quote);

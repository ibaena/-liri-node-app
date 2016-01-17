var keys = require('./keys');
var Twitter = require('twitter');
var fs = require('fs'); 
var clients;
var params;

exports.showTweets = 
client = new Twitter({
  consumer_key: 'pgoGUlKwBvJkBu4P1BIbaOuhi',
  consumer_secret: 's1P9TBe8zDx8sbxpQj4eKgMi91h2pzm9G71zkdD622ZPjqiV66',
  access_token_key: '4166539402-Cb4QrzFq0SQZsBctx5OHytcyZbddRC84YzXquyU',
  access_token_secret: 'g7luhASpYIiTn0Der4nhBRPKQGnQFxrXUywqHRpnKyfnA',
});

params = {screen_name: 'NotThefakeIB',
              count: '10'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    //console.log(tweets);
    for(i=0;i<tweets.length;i++){
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);
      console.log(' ');

      var log = tweets[i].text+'\r\n'+tweets[i].created_at+'\r\n'+'\r\n';
      fs.appendFile("./log.txt", log, function(err) {
        if(err) {
        return console.log(err);
        }
      });
    }
        console.log("log.txt was updated");
        }
        else{
          console.log("DOH!");
        }
});
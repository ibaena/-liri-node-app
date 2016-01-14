var commands =process.argv;



switch(commands[2]){
  case 'my-tweets':
    var tweetbuilder = require("./tweets.js");
    break;
  case 'spotify-this-song':
    var spotify = require('spotify');

spotify.search({ type: 'track', query: commands[3] }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
for(i=0;i<data.length;i++){
      console.log(data);

    }
});
    break;
  case 'movie-this':
    console.log('Drive Ins');
    break;
  case 'do-what-it-says':
    console.log('Simon Told You');
    break;
  default:
    console.log('Mr Fails Alot');
    break;
}
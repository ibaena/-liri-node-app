var commands =process.argv;


switch(commands[2]){
  case 'my-tweets':
    var tweetbuilder = require("./tweets.js");
    break;
  case 'spotify-this-song':
    var songbuilder = require("./song-search.js");
    break;
  case 'movie-this':
    var moviebuilder = require("./omdb.js");
      break;
  case 'do-what-it-says':
    console.log('Simon Told You');
    break;
  default:
    console.log('Mr Fails Alot');
    break;
}
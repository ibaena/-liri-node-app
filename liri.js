var commands =process.argv;
var spotSearch = commands.slice([3]);


switch(commands[2]){
  case 'my-tweets':
    var tweetbuilder = require("./tweets.js");
    break;
  case 'spotify-this-song':
    var songbuilder = require("./song-search.js");
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
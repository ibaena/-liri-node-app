var commands =process.argv;
var filename = './random.txt';


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
    var fs = require('fs');
    fs.readFile('./random.txt', function(err, f){
    var array = f.toString().split(',');
    //console.log(array[0]);
    commands[2] = array[0];
    commands[3] = array[1];


});

    console.log('Simon Told You');
    break;
  default:
    console.log('Mr Fails Alot');
    break;
}
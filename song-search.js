var spotify = require('spotify');
var songInfo;
var tempsong;
var commands =process.argv;
var query = commands.slice([3]);

exports.showSong = 
spotify.search({ type: 'track', query: query }, function(err, data) {
    if ( data.tracks.total === 0) {
      console.log('Artist: Blink 182');
      console.log('Song Title: Whats my age again');
      console.log('Preview: ');
      console.log('Album: Take Your Pants off and Jacket');
      console.log(' ');
        return;
    }
    songInfo = data.tracks.items;
  for(i=0;i<songInfo.length;i++){
    for(j=0;j<songInfo[i].artists.length;j++){
      tempsong = songInfo[i].artists[j];
      //console.log(tempsong);
    }

     console.log('Artist: '+tempsong.name);
     console.log('Song Title: '+songInfo[i].name);
     console.log('Preview: '+songInfo[i].preview_url);
     console.log('Album: '+songInfo[i].album.name);
     console.log(' ');
  }
   
});
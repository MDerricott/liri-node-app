require("dotenv").config();
require("fs");
var keys = require("./keys.js");
var key = new keys();


var nodeArgs = process.argv;
var term = "";

for (var i = 3; i < nodeArgs.length; i++) {

    if (i > 3 && i < nodeArgs.length) {
      term = term + " " + nodeArgs[i];
    }
  
    else {
      term += nodeArgs[i];
    }
  };

if(nodeArgs[2] === "concert-this"){
    key.concertThis(term);
}
else if (nodeArgs[2]=== "movie-this"){
    key.movieThis(term);
}
else if (nodeArgs[2] === "spotify-this-song"){
    key.spotifyThis();
}

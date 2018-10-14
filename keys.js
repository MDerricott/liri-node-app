var request = require("request");
var moment = require("moment");
console.log('this is loaded');
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

var divider = "\n------------------------------------------------------------";


var concertThis = function () {
  console.log("Searching Bands in Town...");
  var queryURL = "https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp";
  request(queryURL,function(error,response,body){
    if(!error){
      var jsonData = JSON.parse(body);
      var date = moment(jsonData[0].datetime,"YYYY-MM-DD");

      var bandData = [
        divider,
        "Line-Up: " + jsonData[0].lineup,
        "Venue: " + jsonData[0].venue.name,
        "Location: " + jsonData[0].venue.city,
        "Date: " + date.format("MM-DD-YYYY"),
        divider

      ].join("\n");
      console.log(bandData);
     
    }
  });

};


// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   // If the request is successful
//   if (!error && response.statusCode === 200) {

//     // Parse the body of the site and recover just the imdbRating
//     // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("Release Year: " + JSON.parse(body).Year);
//   }
// });












exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


exports.bandsInTown = {
  concertThis: concertThis()
}

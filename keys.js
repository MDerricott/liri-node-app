// require("dotenv").config();
var request = require("request");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");

var divider = "\n------------------------------------------------------------";

var liriNode = function () {

this.concertThis = function(term) {
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

this.movieThis = function(term) {
  console.log("Searching Movies...");
  var queryURL = "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";
  request(queryURL,function(error,response,body){
    if(!error){
      var jsonData = JSON.parse(body);
     

      var movieData = [
        divider,
        "Title: " + jsonData.Title,
        "Release: " + jsonData.Year,
        "IMDB Rating: " + jsonData.Ratings[0].Value,
        "Rotten Tomato Rating: " + jsonData.Ratings[0].Value,
        "Country: " + jsonData.Country,
        "Lanuage: " + jsonData.Language,
        "Plot: " + jsonData.Plot,
        "Actors: " + jsonData.Actors,
        divider

      ].join("\n");
      console.log(movieData);
     
    }
  });

};

this.spotifyThis = function(term) {
  console.log("Searching Spotify...");
 
  var spotify = new Spotify({
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
  });

  
spotify.search({ type: 'track', query: term}, function(err, data) {
  if (!err) {
    var songData = [
      divider,
      "Artist(s): " + data.tracks.items[0].artists[0].name,
      "Song: " + data.tracks.items[0].name,
      "Album: " + data.tracks.items[0].album.name,
      "Song URL: " + data.tracks.items[0].external_urls.spotify,
      divider
    ].join("\n");
 console.log(songData);
 
  }
  else if (term === ""){
    spotify.search({ type: 'track', query: "All the small things"}, function(err, data) {
    var songData = [
      divider,
      "Artist(s): " + data.tracks.items[0].artists[0].name,
      "Song: " + data.tracks.items[0].name,
      "Album: " + data.tracks.items[0].album.name,
      "Song URL: " + data.tracks.items[0].external_urls.spotify,
      divider
    ].join("\n");
 console.log(songData);
  });
    
  }
  else {
    return console.log('Error occurred: ' + err);
  }

});

};
};












module.exports = liriNode;

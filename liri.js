require("dotenv").config();
require("fs");
var keys = require("./keys.js");
var request = require("request");

var nodeArgs = process.argv;




if(nodeArgs[2] === "concert-this"){
    keys.bandsInTown.concertThis;
}

require("dotenv").config();
var moment = require("moment");
var Spotify = require("node-spotify-api");
var axios = require("axios");

// ==========================================

app(process.argv[2], process.argv[3]);

// =========================================

function app(command, param) {

    switch (command) {
        case "concert-this":
            showBand(param);
            break;

        case "movie-this":
            showMovie(param);
            break;

        case "spotify-this-song":
            showSong(param);
            break;

        case "do-what-it-says":
            doIt();
            break;

        default: console.log("Liri does not know that command, Please try again.")
            break;
    };
};

// ============================================

function showBand(artist) {

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(response => {
        console.log(response.data);

        for (let i = 0; i < response.data.length; i++) {
            const show = response.data[i].venue;

            console.log(show.city + ", " + (show.region || show.country) + " at " + show.name + " " + moment(show.datatime).format("hh:mm a, MM/DD/YYYY"));
            console.log("===========================================")

        }

    })
}

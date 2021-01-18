const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

const getCoordinates = require("./lib/geonames");
const getLocPic = require("./lib/pixabay");
const getWeather = require("./lib/weatherbits");

const express = require("express");
const app = express();
app.use(express.static("dist"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

let locationData = {};

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
});

app.post("/weather", function (req, res) {
    let requestData = {};
    
    if (req.query.placename && req.query.country) {
        requestData = {
            placename: req.query.placename,
            country: req.query.country,
        };

        getCoordinates((placename = requestData.placename), (country = requestData.country), (username = process.env.GEONAME_USER))
        .then(function (coords) {
            if (coords.location_available) {
                let weather = getWeather((key = process.env.WEATHERBITS_API_KEY), (lat = coords.lat), (lon = coords.long));
                weather.location_available = true;
                return weather;
            } else {
                let weather = {
                    location_available: false
                }
                return weather;
            }
        })
        .then(function (weather) {
            locationData = {
                weather: weather,
            };
            let pic = getLocPic((key = process.env.PIXABAY_API_KEY), (q = requestData.placename));
            return pic;
        })
        .then(function (pic) {
            locationData.pic = pic;
            res.send(locationData);
        });

    } else {
        res.status(400);
        res.send("Required parameters not provided.")
    };
});

app.listen(port, function () {
    console.log(`Travel app listening on port: ${port}`);
});

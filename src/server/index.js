const dotenv = require("dotenv");
dotenv.config();

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1";
const meaningCloudApi = {
    application_key: process.env.API_KEY,
};

const port = process.env.PORT;

var path = require("path");
const express = require("express");

const app = express();

app.use(express.static("dist"));

const cors = require("cors");

app.use(cors());

app.get("/", function (req, res) {
    res.sendFile(path.resolve("dist/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
    console.log(`NLP app listening on port: ${port}`);
});

const fetch = require("node-fetch");
const utf8 = require("utf8");

const encodeStr = function (str) {
    const formattedStr = utf8.encode(str);
    return formattedStr;
};

const sentimentAnalysis = async (key = "", lang = "", txt = "") => {
    const formattedTxt = encodeStr(txt);
    const request = await fetch(`${baseUrl}?key=${key}&lang=${lang}&txt=${formattedTxt}`);

    try {
        let response = await request.json();
        return response;
    } catch (error) {
        console.log("error", error);
    }
};

const getAnalysis = function (req, res) {
    sentimentAnalysis((key = meaningCloudApi.application_key), (lang = "en"), (txt = req.query.txt)).then(function (result) {
        res.send(result);
    });
};

app.post("/analysis", getAnalysis);

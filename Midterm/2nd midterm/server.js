const express = require('express');
const bodyparser = require('body-parser');
const app = express();

const https = require("https");

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const url1 = "https://anapioficeandfire.com/api/characters";
const url2 = "https://thronesapi.com/api/v2/Characters";

let id = "";
let image = "";
let first_name = "";
let last_name = "";
let born_date = "";
let dead_date = "";
let titles = [];
let aliances = "";
let family = [];

app.get('/', (req, res) => {
    res.render("index", { id: id });
});

app.get('/', (req, res) => {
    https.get(url1, (response) => {
        console.log(response);
        let tempRes="";

        response.on('data', (data) => {
            console.log(data);
            tempRes+=data;
        }).on('end', (data) => {
            var json = JSON.parse(tempRes);
        });
    });

    https.get(url2, (response) => {
        console.log(response);
        let tempRes="";
        
        response.on('data', (data) => {
            console.log(data);
            tempRes+=data;
        }).on('end', (data) => {
            var json = JSON.parse(tempRes);
        });
    });
});


app.listen(1000, () => {
    console.log("Listening to port 1000");
});
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

app.get('/', (req, res) => {
    res.render("index");
});


app.listen(1000, () => {
    console.log("Listening to port 1000");
});
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/html/index.html");
});

app.get('/about', (req, res) => {
    var name = req.query.name;
    res.send("<h2>Hello "+ name +"</h2>");
});

app.get('/secure', (req, res) => {
    res.send("<h1>This is a secure location<h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const family = ["Demian", "Julieta", "Jimena", "Ernestina", "Cristian"];

app.get('/', (req, res) => {
    res.render("index", { name: "Demian", family: family});
});

app.get('/about', (req, res) => {
    var name = req.query.name;
    res.send("<h2>Hello "+ name +" from query in url</h2>");
});

app.get('/about/:name/detail', (req, res) => {
    var name = req.params.name;
    res.send("<h2>Hello "+ name +" from parameter in url</h2>");
});

app.route('/login')
    .get((req, res) => {
        var username = req.query.username;
        var password = req.query.password;
        res.send("<h2>Hello "+ username +", you are logged in</h2>")
    })

    .post((req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        res.send("<h2>Hello "+ username +", you are logged in</h2>");
    })

    //.put().delete().patch().purge();

app.get('/secure', (req, res) => {
    res.send("<h1>This is a secure location<h1>");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
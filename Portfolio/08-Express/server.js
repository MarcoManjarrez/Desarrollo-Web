const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: true}));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

const family = ["Demian", "Julieta", "Jimena", "Ernestina", "Cristian"];
let name = "Demian";

app.get('/', (req, res) => {
    res.render("index", { name: name });
});

app.get('/about', (req, res, next) => {
    var loc_name = req.query.name;
    const error = new Error("Missing 'name' value");
    error.status = 400;
    if (!loc_name) next(error);
    else {
        name = loc_name;
        res.redirect("/");
    }
}, (error, req, res, next) => {
    console.error(error.stack);
    res.status(500).render("error", {
       message: error.status + " = " + error.message
    });
});

app.get('/about/:name/detail', (req, res) => {
    var name = req.params.name;
    res.send("<h2>Hello "+ name +" from parameter in url</h2>");
});

app.route('/login')
    .get((req, res) => {
        var username = req.query.username;
        var password = req.query.password;
        res.send("<h2>Hello "+ username +", you are logged in</h2>");

        if (!username) {
            const error = new Error("Missing 'name' value");
            error.status = 400;
            next(error);
        }
        else {
            name = loc_name;
            res.redirect("/");
        }
    }, (error, req, res, next) => {
        console.error(error.stack);
        res.status(500).render("error", {
        message: error.status + " = " + error.message
        });
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

/*
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).send("There was an error in the processing of your request");
});
*/

/*
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).render("error", {
       message: error.status + " - " + error.message
    });    
});
*/

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
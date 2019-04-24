var express = require('express');
var path = require('path');
var passport = require('passport');
var cloudinary = require('cloudinary');
var users = require('./models/users');
var Keys = require('./config/keys');



var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());

require("./config/passport");

var PORT = process.env.PORT || 5005;
// Only for Deployment -HEROKU- Serve up static assets DO NOT TOUCHE !!!
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/client/public')));

//Express Server Start
app.listen(PORT, function () {
    console.log('App listenning to port number : ' + PORT);
});


//////////////  -----  API ROUTE GOES HERE (e.i: DATABASE REQUEST) -----   ////////////////////

// An api endpoint that returns a short list of items
app.get('/api/getList', (req, res) => {
    var list = ["Will", "Dorothy", "Ry"];
    res.json(list);
    console.log('Sent list of items');
});


// TO DO: cloudinary photo cloud service API
app.get('/api/get_photos/cat', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('modern',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );

});

app.get('/api/get_photos/cat', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('luxury',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );

});

app.get('/api/get_photos/cat', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('antique',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );

});

app.get('/api/get_photos/cat', (req, res) => {
    // cloudinary.v2.api.resources_by_tag('tag name') to get images with tag name
    cloudinary.v2.api.resources_by_tag('decor',
        function (err, results) {
            // console.log(results)  
            res.json(results);
        }
    );

});

cloudinary.config({
    cloud_name: Keys.cloud_name,
    api_key: Keys.api_key,
    api_secret: Keys.api_secret
}
)

//TO DO: database routes//
app.get("/api/users/favorites", (req, res) => {
    users.findAll({}).then((results) => {
        res.json(results);
        console.log(results);
    });
});


// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + 'client/public/index.html'));
});




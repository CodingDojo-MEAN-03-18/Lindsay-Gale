// Require Express
var express = require("express");
var path = require("path");
// Create the Express app
var app = express();
var bodyParser = require('body-parser');
// Use the Express app!
app.use(bodyParser.urlencoded({ extended: true }));
// Set-up static content
app.use(express.static(path.join(__dirname, "./static")));
// Set-up EJS and our Views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//Set-up session
var session = require('express-session');
app.use(session({secret: 'supersecretpassword'}));

// Start Routes --------------------------------------------

// Initialize the counter
var counter = 0;

// Root route to render the index.ejs view
app.get('/', function(req, res){
     var currentSession = req.session;
     res.render('index', {counter});
     counter++;
})

app.get('/double', function(req, res){
     counter += 1;
     res.redirect('/');
})

app.get('/reset', function(req, res){
     counter = 0;
     res.redirect('/');
})

// End Routes ----------------------------------------------

// Tell the Express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

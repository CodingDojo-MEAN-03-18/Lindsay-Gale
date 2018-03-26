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

// Root route to render the index.ejs view
app.get('/', function(req, res){
     res.render('index');
})

// Users route to process data passed to register new user
app.post('/users', function(req, res) {
     var userInfo = {
          userName: req.body.StudentName,
          dojoLocation: req.body.DojoLocation,
          favoriteLanguage: req.body.FavoriteLanguage,
          userComment: req.body.Comment
     }
     res.render('users', {userInfo});
})

// End Routes ----------------------------------------------

// Tell the Express app to listen on port 8000
app.listen(8000, function() {
     console.log("listening on port 8000");
});

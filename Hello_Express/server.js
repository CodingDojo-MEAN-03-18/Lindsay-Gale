// Load the express module
var express = require("express");

// Invoke var express
// and store the resulting application in var app
var app = express();

// ------------------------------------------------
// ROUTES
// ------------------------------------------------

// Handle the base route "/"
// and respond with "Hello Express"
app.get('/', function(request, response){
     response.send("<h1>Hello Express<h1>");
})

// Add a new route that will render an EJS View
app.get('/users', function(request, response){
     var users_array = [
          {name: "Michael", email: "michael@codingdojo.com"},
          {name: "Jay", email: "jay@codingdojo.com"},
          {name: "Brendan", email: "brendan@codingdojo.com"},
          {name: "Andrew", email: "andrew@codingdojo.com"}
     ];
     response.render('users', {users: users_array});
})

// ------------------------------------------------
// ------------------------------------------------

// Tell the Express app to listen on port 8000
app.listen(8000, function(){
     console.log("listening on port 8000");
})

// Tell the server to use the "/static" folder
app.use(express.static(__dirname + "/static"));

// Set the location where Express will look for the EJS views
app.set('views', __dirname + '/views');

// Set the view engine itself so that Express knows
// that we are using EJS
app.set('view engine', 'ejs');

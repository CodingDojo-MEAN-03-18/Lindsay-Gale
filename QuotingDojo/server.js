// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: false }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Require Mongoose
var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');
// Create a Mongoose schema
const QuoteSchema = new mongoose.Schema({
     name: String,
     quote: String
});

mongoose.model('Quote', QuoteSchema); // We are setting this Schema in our Models as 'User'
const Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
// Use native promises
mongoose.Promise = global.Promise;

// ------------------------- START: Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})

app.get('/quotes', function(req, res) {
     Quote.find({}, function(err, quotes) {
          if (err) { console.log(err); }
          res.render('quotes', { quotes: quotes });
     });
});

app.post('/quotes', function(req, res) {
  console.log("POST DATA", req.body);
  // create a new User with the name and age corresponding to those from req.body
  var user = new Quote({name: req.body.name, quote: req.body.quote});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a quote!');
      res.render('quotes', { quotes: quotes });
    }
  })
})

// ------------------------- END: Routes

var server = app.listen(8000, function() {
     console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
     console.log("Client/socket is connected!");
     console.log("Client/socket id is: ", socket.id);
     // all the server socket code goes in here
     socket.on( "posting_quote", function (data){
          console.log( 'Someone clicked a button!  Reason: '  + data.reason);
          socket.emit( 'updated_message', {response: data});
     })
})

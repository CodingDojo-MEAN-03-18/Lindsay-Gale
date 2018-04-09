// Dependencies ----------------------------------
// Require the Express Module
var express = require('express');
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Require Mongoose
var mongoose = require('mongoose');
// Require path
var path = require('path');

// Create an Express App
var app = express();

// Use body-parser with our App to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/fox_dashboard');

// Create Mongoose Schemas
var FoxSchema = new mongoose.Schema({
     species: String,
     regions: String,
     fact: String
})

mongoose.model('Fox', FoxSchema);
var Fox = mongoose.model('Fox')

// START: Routes --------------------------

// Root Route - Display all of the foxes
app.get('/', function(req, res) {
    Fox.find({}, function(err, results) {
         if (err) {
              console.log(err);
         }
         res.render('index', { foxes: results });
    });
});

// Show information about one particular fox
app.get('/foxes/:id', function(req, res){
     Fox.find({ _id: req.params.id }, function(err, response) {
          if (err) {
               console.log(err);
          }
          res.render('show_fox', { fox: response[0] });
     });
});

// Show a form for adding a new fox
app.get('/foxes/new', function(req, res) {
     res.render('new_fox');
});

// Create a new fox
app.post('/foxes', function(req, res) {
    console.log("POST DATA", req.body);
    Fox.create(req.body, function(err, result){
         if (err) {
              console.log(err);
         }
         res.redirect('/');
    });
});

// Edit a particular fox
app.get('foxes/:id/edit/', function(req, res) {
     Fox.find({ _id: req.params.id }, function(err, response) {
          if (err) {
               console.log(err);
          }
          res.render('edit_fox', { fox: response[0] });
     });
});

// Update a particular fox
app.post('foxes/:id', function(req, res) {
     Fox.update({ _id: req.params.id }, req.body, function(err, result) {
          if (err) {
               console.log(err);
          }
          res.redirect('/');
     });
});

// Delete a particular fox
app.post('foxes/:id/delete', function(req, res) {
     Fox.remove({ _id: req.params.id }, function(err, result) {
          if (err) {
               console.log(err);
          }
          res.redirect('/');
     });
});

// END: Routes ----------------------------

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

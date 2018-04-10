// Require the Express Module
const express = require('express');
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');
// Require path
const path = require('path');

// Create an Express App
const app = express();

// Use body-parser with our App to parse form data sent via HTTP POST
app.use(bodyParser.json());

// Setting our Static Folder Directory
//   app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
//   app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
//   app.set('view engine', 'ejs');

// Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost/1955_api');

// Create Mongoose Schemas
var PersonSchema = new mongoose.Schema({
     name: String
})

mongoose.model('Person', PersonSchema);
var Person = mongoose.model('Person')

// START: Routes --------------------------------------

app.get('/', function(req, res) {
    Person.find({}, function(err, response){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", people: response});
        }
     })
})

app.get('/new/:name/', function(req, res) {
    console.log("POST DATA", req.body);
    Person.create({ _name: req.params.name }, function(err, result){
        if (err) {
             console.log(err);
        }
        res.redirect('/');
   });
})

app.get('/remove/:name/', function(req, res) {
    console.log("POST DATA", req.body);
    Person.remove({ _name: req.params.name }, function(err, result){
        if (err) {
             console.log(err);
        }
        res.redirect('/');
   });
})

app.get('/remove/:name/', function(req, res) {
    console.log("POST DATA", req.body);
    Person.find({ _name: req.params.name }, function(err, result){
        if (err) {
             console.log(err);
        }
        res.redirect('/');
   });
})

// END: Routes -----------------------------------------

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
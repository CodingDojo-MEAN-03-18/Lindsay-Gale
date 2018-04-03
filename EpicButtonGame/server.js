const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
     res.render("index");
})

const server = app.listen(8000, function() {
     console.log("listening on port 8000");
});
const io = require('socket.io').listen(server);

let count = 0;
io.sockets.on('connection', function(socket) {
     console.log('incoming socket connection');

     socket.on('buttonClicked', function() {
          numberUpdated(++count);
     });

     socket.on('reset', function() {
          numberUpdated(count = 0);
     });
});

function numberUpdated(number) {
     io.emit('numberUpdated', number);
}

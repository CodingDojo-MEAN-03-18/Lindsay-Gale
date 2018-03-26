
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
       fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
       });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('views/new_car.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if(request.url === '/images/red_car.jpg'){
         fs.readFile('./images/red_car.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
         });
    }
    else if(request.url === '/images/green_car.jpg'){
         fs.readFile('./images/green_car.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
         });
    }
    else if(request.url === '/images/blue_car.jpg'){
         fs.readFile('./images/blue_car.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
         });
    }
    else if(request.url === '/images/cats1.jpg'){
         fs.readFile('./images/cats1.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
         });
    }
    else if(request.url === '/images/cats2.jpg'){
         fs.readFile('./images/cats2.jpg', function(errors, contents){
              response.writeHead(200, {'Content-type': 'image/jpg'});
              response.write(contents);
              response.end();
         });
    }
    else {
        response.end('File not found!!!');
    }
});

server.listen(6789);

console.log("Running in localhost at port 6789");

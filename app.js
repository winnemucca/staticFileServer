var fs = require('fs');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

app.get('/about', function(req, res){
//when somebody tries to get the about page run this function
	res.send('<p>all about hope and less despair</p>');
});

// app.get('/contents', function(req, res){
// console.log('test');

	//this is a blocking code.  this is bad!!!!!! and is part 2 of exercise
// var fileContents=fs.readFileSync('data2.text');
// res.header('Content-Type', 'text/html');
// res.send(fileContents);

	//**************part three**************
// 	fs.readFile('data2.text', function(err, data) {
//   	res.header('Content-Type', 'text/html');
//   	res.send(data);
// 	});


// });

//: is dynamic because of express

app.get('/:filename', function(req, res) {
 	fs.readFile('./public/' + req.params.filename, function(err,data){
 	res.header('Content-Type', 'text/html');
 	res.send(data);
 });
 
 
// });




var server = app.listen(4040, function() {
	console.log('Express server listening on port ' + server.address().port);
});


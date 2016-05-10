var express = require('express');
var fs = require('fs')

var app = express();

app.set('views', '.src/views');
app.set('view engine', 'jade');

app.get ('/', function (request, response){
	fs.readFile('../resources/users.json', function (error, data){
		if (error){
			console.log ("Apparently something went wrong: " + error)
		}

		

	});
});
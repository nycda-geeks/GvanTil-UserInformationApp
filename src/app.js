///////////////////////////////////////
// USER INFORMATION APP
//////////////////////////////////////

var express = require('express'); // loading express
var fs = require('fs') // loading filesystem

var app = express();

// adding jade/pug
app.set('views', './src/views'); 
app.set('view engine', 'jade');

////////////////////////
// Display all users
////////////////////////

app.get ('/', function (request, response){ // main get request
	fs.readFile('./users.json', function (error, data){ // readfile users.json file
		if (error){ // error utility
			console.log ("Apparently something went wrong: " + error)
		}

		var parsedUsers = JSON.parse(data); // parsing json file
		console.log ('Total amount of users:' + parsedUsers.length);

		response.render ('index',{ // rendering parsed data to json file
			users: parsedUsers
		});

	});
});

// server set up
var server = app.listen(3000, function () { 
	console.log('My User Information App is listening on port: ' + server.address().port);
});

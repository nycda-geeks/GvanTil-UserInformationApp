///////////////////////////////////////
// USER INFORMATION APP
//////////////////////////////////////

var express = require('express'); // loading express
var fs = require('fs') // loading filesystem
var bodyParser = require('body-parser')

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

//////////////////////
//Search Bar
//////////////////////

// PART 1.1
app.get ('/search', function (request, response){ // main get request
	fs.readFile('./users.json', function (error, data){ // readfile users.json file
		if (error){ // error utility
			console.log ("Apparently something went wrong: " + error)
		}

		var parsedUsers = JSON.parse(data); // parsing json file
		console.log ('Get request to route /search received');

		response.render ('search');

	});
});

// PART 1.2

// included bodyparser / app.use body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.post ('/search', function (request, response){
	console.log ("post request received")
	console.log (request.body);
});

// server set up
var server = app.listen(3000, function () { 
	console.log('My User Information App is listening on port: ' + server.address().port);
})

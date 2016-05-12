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

// included bodyparser / app.use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// PART 1
//Get part
app.get('/search', function (request, response) {
	console.log ("Received Get request")
	response.render("search");
});

//Post part
app.post('/searchresult', function (request, response){
	fs.readFile('./users.json', function (error, data){
		if (error){
			console.log ("Apparently something went wrong" + error)
		}
		var parsedUsers = JSON.parse(data);
		console.log ('The userdatabase is loaded. There\'s a total of ' + parsedUsers.length + ' users.')
		for (i = 0; i < parsedUsers.length; i ++){
			if(input == parsedUsers[i].firstname){
				console.log (parsedUsers[i].firstname)
			}
		}
	});
		response.send (JSON.stringify(request.body))
});

//PART 2

// server set up
var server = app.listen(3000, function () { 
	console.log('My User Information App is listening on port: ' + server.address().port);
});

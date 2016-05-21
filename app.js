///////////////////////////////////////
// USER INFORMATION APP
//////////////////////////////////////

var express = require('express'); // loading express
var fs = require('fs') // loading filesystem
var bodyParser = require('body-parser')
var filereader = require('./custom_modules/filereader')

var app = express();

// adding jade/pug
app.set('views', './src/views'); 
app.set('view engine', 'pug');

app.use(express.static('./resources/'));

////////////////////////
// Display all users
////////////////////////

// app.get ('/', function (request, response){ // main get request
// 	fs.readFile('./resources/users.json', function (error, data){ // readfile users.json file
// 		if (error){ // error utility
// 			console.log ("Apparently something went wrong: " + error)
// 		}
		
// 		var parsedUsers = JSON.parse(data); // parsing json file
// 		console.log ('Total amount of users: ' + parsedUsers.length);
// 		console.log (parsedUsers);

// 		response.render ('index',{ // rendering parsed data to json file
// 			users: parsedUsers
// 		});

// 	});
// });

app.get ('/', function (request, response){
	filereader.parseJSON ('./resources/users.json', function (parsedData){
		console.log ('Total amount of users: ' + parsedData.length)
		console.log (parsedData);
		response.render ('index', {
			users: parsedData
		})
	})
})


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

//Post part //searchresult
// app.post('/searchresult', function (request, response){
// 	fs.readFile('./resources/users.json', function (error, data){
// 		if (error){
// 			console.log ("Apparently something went wrong" + error)
// 		}
// 		var parsedUsers = JSON.parse(data);
// 		var searchQuery = request.body.name
// 		var searchResult = []

// 		console.log ('The userdatabase is loaded. There\'s a total of ' + parsedUsers.length + ' users.')
		
// 		for (i = 0; i < parsedUsers.length; i ++){
// 			if (searchQuery == parsedUsers[i].firstname || searchQuery == parsedUsers[i].lastname || searchQuery == (parsedUsers[i].firstname + " " + parsedUsers[i].lastname)){
// 				searchResult.push(parsedUsers[i].firstname, parsedUsers[i].lastname, parsedUsers[i].email)
// 			}
// 		}
// 		if (searchResult.length > 0){
// 			console.log ('Found a match for the following query: ' + searchQuery)
// 			response.send ("Firstname: " + searchResult[0] + "<br>" + "Lastname: " + searchResult[1]+ "<br>" + "Email: " + searchResult[2])
// 		}
// 		else {response.send("No results were found.")
// 			console.log ("No matches found for: " + searchQuery)
// 		}
// 	});
// });

app.post('/searchresult', function (request, response){
	filereader.parseJSON ('./resources/users.json', function (parsedData){
		console.log ("received a POST request")
		var searchQuery = request.body.name
		var searchResult = []
		for (i = 0; i < parsedData.length; i ++){
			if (searchQuery == parsedData[i].firstname || searchQuery == parsedData[i].lastname || searchQuery == (parsedData[i].firstname + " " + parsedData[i].lastname)){
				searchResult.push(parsedData[i].firstname, parsedData[i].lastname, parsedData[i].email)
			}
		}
		if (searchResult.length > 0){
			console.log ('Found a match for the following query: ' + searchQuery)
			response.send ("Firstname: " + searchResult[0] + "<br>" + "Lastname: " + searchResult[1]+ "<br>" + "Email: " + searchResult[2])
		}
		else {response.render('nosearchresult',{
			searchQuery: searchQuery
		})
			console.log ("No matches found for: " + searchQuery)
		}
	})
})

// API
app.post('/api', function (request, response){
	// Creating a variable that contains the searchbar input
	var userInput  = request.body.search
	// capitalize userInput
	var capUserInput = userInput.charAt(0).toUpperCase() + userInput.slice(1)
	// Creating an empty Array to store results in
	var result = []
	// reading the users.json file
	fs.readFile('./resources/users.json', function (error, data){
		if (error){
			console.log ("Apparently something went wrong" + error)
		}
		// Creating a variable that contains the parsed data from users.json
		var parsedUsers = JSON.parse(data);
		// Creating a for loop to loop through parsedUsers
		for (i = 0; i < parsedUsers.length; i++){
			// Creating a conditional to check if userInput matches something in parsedUsers
			if(parsedUsers[i].firstname.indexOf(capUserInput) > -1 || parsedUsers[i].lastname.indexOf(capUserInput) > -1 || (parsedUsers[i].firstname + " " + parsedUsers[i].lastname).indexOf(capUserInput) > -1 || (parsedUsers[i].lastname + " " + parsedUsers[i].firstname).indexOf(capUserInput) > -1) {
				result.push(parsedUsers[i].firstname + " " + parsedUsers[i].lastname)
				}
			}
		if (capUserInput == ""){
			response.send ("")
		} else {
			response.send (result)
		}
	})
	
})

//////////////////////
//ADD USER
//////////////////////

//PART 2

app.get ('/adduser', function (request, response){
	console.log ("Received Get request")
	response.render('adduser', {
	});
})

app.post('/', function (request, response){
	console.log ('Received Post request')
	fs.readFile('./resources/users.json', function (error, data){
		if (error){
			console.log ("apparently something went wrong: " + error)
		}
		console.log ('The userdatabase is loaded')
		console.log(request.body)
		var parsedUsers = JSON.parse(data);
		var newUser = {"firstname": request.body.firstname, "lastname": request.body.lastname, "email": request.body.email}
		parsedUsers.push(newUser)

		// Writing new user to users.json
		fs.writeFile ('./resources/users.json', JSON.stringify(parsedUsers), function(error){
			if (error){
				throw error
			};
			response.render ('index',{ // rendering parsed data to json file
				users: parsedUsers
			});
		});
	});
	
})

// server set up
var server = app.listen(3000, function () { 
	console.log('My User Information App is listening on port: ' + server.address().port);
});

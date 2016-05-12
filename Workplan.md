User Information App - Web Server

Create a Node.js application that is the beginning of a user management system. Your users are all saved in a "users.json" file, and you can currently do the following:
- search for users
- add new new users to your users file.
- get your starter file here: users.jsonIn een nieuw venster bekijken

Part 0
Create one route:
- route 1: renders a page that displays all your users.

Part 1
Create two more routes:
- route 2: renders a page that displays a form which is your search bar.
- route 3: takes in the post request from your form, then displays matching users on a new page. Users should be matched based on whether either their first or last name contains the input string.

Part 2
Create two more routes:
- route 4: renders a page with three forms on it (first name, last name, and email) that allows you to add new users to the users.json file.
- route 5: takes in the post request from the 'create user' form, then adds the user to the users.json file. Once that is complete, redirects to the route that displays all your users (from part 0).


Workplan
prework
- set up a git repository and make sure that there's a gitignore file and a README
- initialize node and make sure that I npm'd the essential modules (Jade and Express)
- set up a basic file structure (src / views / resources)

part 0
- Download a 'users.json'-file and put it in resources.
- Create an app.js and put it in src.
	- make sure that the modules are required.
		- express / jade 
	- set up jade
	- get-request
		- filesystem/fileread
		- parsing?
- Create a jade.file in which the output from the fileread is rendered
- Set up a server

Part 1
1.1 First route (probably /search)
	- Create another get-request
	- Make sure that app.js renders the abovementioned jade search page
	- Create a jade file with a form with a submit button
1.2 (probably /search)
	- Check slides on post request
	- Find out if I need to use a bodyparser
	- Create a post request 
	- Use a conditional in the jade file to make sure a name only gets di








Part 2

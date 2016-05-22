// Making sure the document has properly loaded
$ (document). ready (function(){
	console.log ("Dom is ready")
// Creating a variable for setTimeout
var fireRequest = true

	$ ('input').keyup (function(){
		console.log ("Somebody is typing")
		var postdata = {
			search: $(this).val()
		}
		console.log (postdata)
		// Whenever something is typed in 'input'
		if (postdata.search){
		// Check if fireRequest = true
			if (fireRequest){
		// When fireRequest = true it is now false
						fireRequest = false
		// AJAX
						$.post('/api', postdata, function(data){
						// make div empty for every new ajax request
						$ ("#autocomplete").empty()
						// load user info in div
						for(person in data){
							$('#autocomplete').append('<option>' + data[person] +'</option>')
						}
					})
		
		// Set timeout to 300 ms and make firerequest true again
				setTimeout(function() {
	    			fireRequest = true
				}, 300);
			}
		}

	})
});

// Verwerken user input

// API maken in app.js met conditionals

// Zorgen dat gegevens uit API worden weergegeven
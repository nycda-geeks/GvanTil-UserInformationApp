$ (document). ready (function(){
	console.log ("Dom is ready")
	$ ('input').keyup (function(){
		console.log ("Somebody is typing")
		var postdata = {
			search: $(this).val()
		}
		console.log (postdata)

		$.post('/api', postdata, function(data){
				$ ("#autocomplete").empty()
				for(person in data){
					$('#autocomplete').append('<option>' + data[person] +'</option>')
				}
		})

	})
});

// Verwerken user input

// API maken in app.js met conditionals

// Zorgen dat gegevens uit API worden weergegeven
var fs = require ('fs')

var parsedData

function reader (file, callback){
	fs.readFile (file, function (error, filecontents){
		if (error){
			console.log ("Apparently something went wrong " + error)	
		}
		parsedData = JSON.parse(filecontents)
		callback (parsedData)
	})
}

module.exports.parseJSON = reader
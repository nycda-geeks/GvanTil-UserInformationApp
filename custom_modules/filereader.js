var fs = require ('fs')

var parsedData

function JSONreader (file, callback){
	fs.readFile (file, function (error, filecontents){
		if (error){
			console.log ("Apparently something went wrong " + error)	
		}
		parsedData = JSON.parse(filecontents)
		callback (parsedData)
	})
}

module.exports.filereader = JSONreader
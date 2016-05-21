var fs = require ('fs')

function JSONreader (file){
	fs.readFile (file, function (error, filecontents){
		if (error){
			console.log ("Apparently something went wrong " + error)	
		}
		console.log (JSON.parse(filecontents))
	})
}

module.exports.filereader = JSONreader
console.log(function(){
	var fs=require('fs')
	var content = fs.readFileSync(process.argv[2]).toString()
	var lines = content.split('\n')
	return lines.length-1
	}()
)

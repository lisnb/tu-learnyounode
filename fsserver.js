var http = require('http')
var fs = require('fs')


var fsserver = http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'})
	var fss = fs.createReadStream(process.argv[3])
	fss.pipe(res)
	})

fsserver.listen(process.argv[2])

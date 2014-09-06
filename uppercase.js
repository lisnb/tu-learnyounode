var http  = require('http')
var tm = require('through2-map')


var server = http.createServer(function(req,res){
	if (req.method != 'POST')
		res.send('need post')
	else
	{
		req.pipe(tm(function(chunk){
			return chunk.toString().toUpperCase()
		})).pipe(res)
	}
})


server.listen(Number(process.argv[2]))

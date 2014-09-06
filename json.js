var url = require('url')
var http  = require('http')


var server = http.createServer(function(req,res){
	if (req.method != 'GET')
		res.end('need a get')
	else
	{
		res.writeHead(200,{'Content-type':'text/json'})
		var qs = url.parse(req.url,true)
		var ret={}
		var date = new Date(qs.query.iso)
		if (qs.pathname == '/api/parsetime')
		{
//			console.log(date)
			ret.hour = date.getHours()
			ret.minute = date.getMinutes()
			ret.second = date.getSeconds()
		}
		else if ( qs.pathname == '/api/unixtime')
		{
			ret.unixtime =  date.getTime()
		}
		res.end(JSON.stringify(ret))
	}

}).listen(Number(process.argv[2]))

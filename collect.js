var http = require('http')
http.get(process.argv[2],function(response){
	var datas=''
	response.setEncoding('utf-8')
	response.on('data',function(data){
		datas+=data
	})
	response.on('error',function(error){
		console.error(error)
	})
	response.on('end',function(end){
		console.log(datas.length)
		console.log(datas)
	})
})

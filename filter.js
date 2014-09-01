var fs = require("fs")
var path = require("path")

fs.readdir(process.argv[2],function(err,list){
	if (err) throw err;
	var nlist=list.filter(function(file){
		return path.extname(file).slice(1) == process.argv[3];
	})

	nlist.forEach(function(obj){console.log(obj);})
})

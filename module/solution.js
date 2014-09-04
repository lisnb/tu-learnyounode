var path = require('path')
var fs = require('fs')


function readDir(dir,extname,callback){
	fs.readdir(dir,function(err,list){
		if (err) 
			return callback(err)
		else
		{
			var legal=list.filter(function(d){
				return path.extname(d) == '.'+extname
			})
			return callback(null,legal)
		}
	})
}

module.exports = readDir

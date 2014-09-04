var solution = require('./solution.js')

solution(process.argv[2],process.argv[3],function(err,list){
	if(err)
		throw err
	
	list.forEach(function(d){
		console.log(d)
	})
})

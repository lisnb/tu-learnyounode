var bl = require('bl')
var http = require('http')
var datas = []
var count = 0


process.argv.slice(2).forEach(function(url,index){
	http.get(url,function(response){
		response.pipe(bl(function(err,data){
			if(err)
				return console.error(err)
			datas[index]=data.toString()
//			console.log(datas[index])
//			console.log(datas)
			count +=1 

			if (count == 3)
			{
				datas.forEach(function(t_data){
					console.log(t_data)
				})
			}
			}))
		})
	})


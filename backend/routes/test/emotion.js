module.exports = function(app){

	app.route('/test/emotion/')
	.get(function(req, res, next) {
		console.log("starting FER")
		var spawn = require("child_process").spawn
		var process = spawn('python3', ['routes/test/test.py'])
		process.stdout.on('data', function(data){
			console.log({data})
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
			res.json({emotion: data.toString()});
		})

	})

}
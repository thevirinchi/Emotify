module.exports = function(app){

	app.route('/emotion/')
	.get(function(req, res, next) {
		const execa = require('execa');
		(async () => {
			try {
				const {stdout} = await execa('python3', ['models/fertestcustom.py']);
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
				res.json({emotion: stdout, error: false});
			} catch (error) {
				console.log(error);
				res.header('Access-Control-Allow-Origin', '*');
				res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
				res.json({error: true});
			}
		})();
	})

}
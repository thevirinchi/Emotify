module.exports = function(app, multer, path, fs){

	const upload = multer({
		dest: "/home/kali/Projects/react-native/emotify/backend/data"
		// you might also want to set some limits: https://github.com/expressjs/multer#limits
	});

	app.post("/emotion/", 
		upload.single("image"),
		function(req, res, next) {
			console.log(req.file)
			const tempPath = req.file.path;
			const targetPath = path.join("/home/kali/Projects/react-native/emotify/backend/models/test.jpg")
			fs.rename(tempPath, targetPath, err => {
				if (err) {
					res.header('Access-Control-Allow-Origin', '*');
					res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
					res.json({error: true, details: err})
				}

				const execa = require('execa');
				(async () => {
					try {
						const {stdout} = await execa('python3', ['models/fertestcustom.py']);
						if(stdout === "no face"){
							res.header('Access-Control-Allow-Origin', '*');
							res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
							res.json({message: "We couldn't detect any face.", error: true});
						}
						else{
							res.header('Access-Control-Allow-Origin', '*');
							res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
							res.json({emotion: stdout, error: false});
						}
					} catch (error) {
						console.log(error);
						res.header('Access-Control-Allow-Origin', '*');
						res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
						res.json({message: error.message, error: true});
					}
				})();
			});
	})

}
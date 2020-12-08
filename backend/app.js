require('dotenv').config()

const https = require('https')
const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const cors = require('cors')
var multer = require('multer')
const path = require("path")

/*	PRODUCTION	*/
// var key = fs.readFileSync(__dirname + '/server.key');
// var cert = fs.readFileSync(__dirname + '/server.crt');
// var ca = fs.readFileSync(__dirname + '/ca_bundle');
// var options = {
//     key: key,
//     cert: cert,
//     ca: ca,
// };

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./routes/test/emotion')(app)
require('./routes/emotion/emotion')(app, multer, path, fs)

app.get('/status', (req, res) => res.send('Working!'));

/*  PRODUCTION  */
// var server = https.createServer(options, app);
// server.listen(443, () => {
//     console.log("server starting on port : " + 443)
// });

/*  DEVELOPMENT */
app.set('port', process.env.PORT || 8080);
app.listen(8080);
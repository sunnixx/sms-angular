const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      http = require('http');

const app = express();

const secret = require('./server/config/secret');

//API file for interacting with MongoDB
const api = require('./server/routes/api');

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Angular DIST output folder.
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api',api);

//Send all other requests to Angular App.
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set port
const port = process.env.PORT || secret.port;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('Running on http://localhost:' + secret.port))
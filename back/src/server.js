//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');

// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// enable all CORS requests
app.use(cors());

// use bodyParser to parse application/json content-type
//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());


//Définition du routeur
var router = express.Router();
app.use('/user', router);
require(__dirname + '/controllers/userController')(router);


//Définition et mise en place du port d'écoute
var port = 1337;
app.listen(port, () => console.log(`Listening on port ${port}`));
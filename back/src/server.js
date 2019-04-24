//import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const helmet = require('helmet');
var cors = require('cors')

//Connexion à la base de donnée
mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true }).then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});

// define the Express app
const app = express();

// enhance your app security with Helmet
//app.use(helmet());

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
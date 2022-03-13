const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})

console.log('Connection to mongoDb on uri: ' + config.mongo.uri);
mongoose.connect(config.mongo.uri);
mongoose.connection.on('error', function(err) {
 console.error('MongoDB connection error: ' + err);
});

/* const monSchema = new mongoose.Schema({
    nom: "Mongo",
    status: "Work"
})
const monModel = mongoose.model('monModel', monSchema);

app.get('/', (req, resp) => {
        resp.send(monModel.findOne({}))
}) */


require('./routes')(app);
app.listen(config.app.port, () => console.log(`Example app listening on ${config.app.port}!`))


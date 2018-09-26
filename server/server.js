const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys.js');

const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config');
const { mongoose } = require('./db.js');

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(config.app.port, () => {
	console.log(`Server started on port ${config.app.port}`);
});


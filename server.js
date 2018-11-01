const express = require('express');
const bodyParser = require('body-parser');
const bookRoute = require('./routes/bookRoute');
const app = express();

const config = require('./config');
const { mongoose } = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/books', bookRoute);

app.listen(config.app.port, () => {
	console.log(`Server started on port ${config.app.port}`);
});


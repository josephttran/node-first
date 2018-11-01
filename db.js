const mongoose = require('mongoose');
const config = require('./config');

const { db: { host, port, username, password, dbname} } = config

const dbUri = `mongodb://${username}:${password}@${host}:${port}/${dbname}`;

mongoose.connect(dbUri, { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('Db connection success');
	} else {
		console.log(`Mongoose connection has occured: ${err}`);
	}
});

module.exports = { mongoose };
const http = require('http');
const fs = require('fs');
const date = require('./myModule');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
	if(err) {
		throw err;
	}
	
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.write(date.myDateTime());
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log(`Server started at http://${hostname} on port ${port}`);
	});
});


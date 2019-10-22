const http = require(`http`);

var nodeServer = http.createServer((req, res) => {
	console.log(`Node Server Loaded.`);
	res.writeHead(200);
	res.write(`Initialize bot server. API usage enabled.`);
	res.end();
}).listen(8080);

nodeServer.on(`listening`, () => {
	console.log(`Node Server has started.`);
});
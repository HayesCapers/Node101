
// require is a built in nodeJS method that includes a module
// that module can be:
// 1.part of core, in which case we do nothing
// 2.From the npm store, written by someone else. require will look inside of node_modules
// 3.A module we wrote, which requires a path to the module
var http = require("http");
// console.log(http);
var server = http.createServer(function(request,response){
	response.writeHead(200,{
		'content-type': 'text/html'
	});
	response.write("<h1>Hello, visitor. This is YOUR node server.</h1>");
	response.end();
});

// server is created above. it came from the http object using the createServer method.
// it includes a request and a response in the callback.. but ALSO has a listen method.
server.listen(8000);
console.log("node js is listening for connections on port 8000");
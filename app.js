

var http = require("http");
// Include the fs module. fs = file system. part of core!! YAY!
var fs = require("fs");

var server = http.createServer((req,res)=>{
	console.log("Someone connected to the server");
	console.log(req.url);

	res.writeHead(200,{
		'content-type': 'text/html',
		
		if (req.url == '/'){
			var theHomePageHTML = fs.readFileSync('./homePage.html');		
			res.end(theHomePageHTML);
		}else if (req.url == '/movie-app'){
			var theHomePageHTML = fs.readFileSync('./movie-app.html');		
			res.end(theHomePageHTML);
		} else if (req.url == '/image-gallery'){
			var theHomePageHTML = fs.readFileSync('./image-gallery.html');		
			res.end(theHomePageHTML);
		}else{
			res.end("<h1>Error 404</h1>");
		}
	});
	// var theHomePageHTML = fs.readFileSync('./homePage.html');
	// res.end(theHomePageHTML);

});

// Tell the server we created above to listen to port 8000(or other above 1000)
// Whenever Someone makes an http request to poort 8000, our callbakc (with req,res) wil fire

var port = 8000;
server.listen(port);
console.log("server is listening for activity on port 8000...")
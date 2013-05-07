// reference the http module so we can create a webserver


var http = require("http");

var url = require("url");

function start(route,handle) {
function onRequest(request, response) {
    console.log("Request received.");
    var pathname = url.parse(request.url).pathname;
     console.log("Request for " + pathname + " received.");
     route(handle,pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}


http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
console.log("Server has started.");
}

exports.start = start;




// Note: when spawning a server on Cloud9 IDE, 
// listen on the process.env.PORT and process.env.IP environment variables

// Click the 'Run' button at the top to start your server,
// then click the URL that is emitted to the Output tab of the console
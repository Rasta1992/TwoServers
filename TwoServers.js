var http = require("http");

// Here we define a port to listen to
var BadPORT = 7000;

// Here we create a generic function to handle requests and responses
function BadRequest(request, response) {
 	response.end("Looking Good!");
 }

 var server = http.createServer(BadRequest);

 server.listen(BadPORT, function(){
 	// Says something good // 
 	console.log("Looking Good!")
 });




// Here we define a port to listen to
var GoodPORT = 7500;

// Here we create a generic function to handle requests and responses
function GoodRequest(request, response) {
 	response.end("Not Looking Good Pal");
 }

 var server = http.createServer(GoodRequest);

 server.listen(GoodPORT, function(){
 	// Say something bad //
 	console.log("Not Looking Good Pal");
 });
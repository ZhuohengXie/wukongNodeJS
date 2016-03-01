var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {};

handle["/hello"] = requestHandlers.hello;
handle["/world"] = requestHandlers.world;
handle["/"] = requestHandlers.homepage;

server.start(router.route, handle);


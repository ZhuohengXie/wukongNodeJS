var exec = require("child_process").exec;

function hello(response) {
    console.log("Request handler 'hello' was called.");
    var body =
        '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<h1>bittiger Hello</h1>' +
        '</body>' +
        '</html>';
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

function world(response) {
    var body =
        '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<h1>bittiger World</h1>' +
        '</body>' +
        '</html>';
    console.log("Request handler 'world' was called.");
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(body);
    response.end();
}

function homepage(response) {
    console.log("Request handler 'homepage' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Welcome!");
    response.end();
}

exports.hello = hello;
exports.world = world;
exports.homepage = homepage;

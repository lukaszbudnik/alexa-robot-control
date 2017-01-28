var AlexaAppServer = require('alexa-app-server');

var port = process.env.PORT

var server = new AlexaAppServer({ port: port, debug: true});
server.start();


var dagger  = require('dagger.js');
var logger  = dagger.require('logger');

// Make sure not to crash on uncaught errors
process.on('uncaughtException', function(err) {
	logger.error(err.stack || err);
});

// Start up the server
dagger.start();

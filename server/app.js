/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express  = require('express');
var mongoose = require('mongoose');
var http     = require('http');
var config   = require('./config/environment');

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
app.use('/', express.static('../www'));
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);
var alchemy = require('./data').alchemy;
var locker  = require('./data').locker;

	console.log("alchemy");
	alchemy.submitQuery("This is really negative and I hate it", http);
app.route('/api/alchemy')
.get(function(req, res) {
	// var body = req.body;
	// var sentence = body.sentence;
	// var user     = body.user;
	console.log("alchemy");
	alchemy.submitQuery("This is really negative and I hate it", http);
	// {"sentence" : "Hello", "user" : "Thomas"};
  // res.sendfile(app.get('appPath') + '/index.html');
});

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

// $.ajax({
  // url: 'http://api.globalhack4.test.lockerdome.com/app_fetch_content',
  // type: 'GET',
  // data:{
    // 'app_id': '7742659951067202',
    // 'app_secret': 'ACpjPArIwwSfBFAuNBT5iyvubivGFFOTDsuuK4y+hGCiq03zGC659lf9JRpa0SiAiL4yMzKov5Rdvhl1OYi1Eg==',
    // 'content_id': 42
  // },
  // success: function(response) {
    // console.log("GET request was successful!");
    // console.log(response);
  // },
  // error: function(xhr) {
    // console.log("GET request wasn't successful");
  // }
// });

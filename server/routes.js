/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app, http) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });

  app.route('/api/recording')
    .post(function(req, res) {
		var body = req.body;
		var sentence = body.sentence;
		var user     = body.user;
		// {"sentence" : "Hello", "user" : "Thomas"};
      // res.sendfile(app.get('appPath') + '/index.html');
    });
};

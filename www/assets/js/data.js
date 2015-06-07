var alchemy = {
	// url  : 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
	key  : '6c3f7de7adae065674ccce9289e1a2930fc4c74f',
	url  : 'http://access.alchemyapi.com',
	path : '/calls/text/TextGetTextSentiment',

	submitQuery : function(query, http) {
		var options = {
		  host: alchemy.url,
		  port: 80,
		  path: alchemy.path,
		  type : 'GET',
		  data : {
			apikey         : alchemy.key,
			text           : query,
			outputMode     : 'json',
			showSourceText : 1
		  },
		};
		http.get(options, function(res) {
			alchemy.onSuccess(res);
		}).on('error', function(e) {
		  console.log("Got error: " + e.message);
		});
		// $.ajax({
		  // url  : alchemy.url,
		  // type : 'GET',
		  // data : {
			// apikey         : alchemy.key,
			// text           : query,
			// outputMode     : 'json',
			// showSourceText : 1
		  // },
		  // success: function(response) {
			// alchemy.onSuccess(response);
		  // },
		  // error: function(xhr) {
			// console.log("GET request wasn't successful");
		  // }
		// });
	},

	onSuccess : function(response) {
		console.log("GET request was successful!");
		console.log(response);
	
		var language = response.language;
		var score    = response.docSentiment.score;
		var type     = response.docSentiment.type;
		var text     = response.text;	
	},
}

var locker = {
	// url  : 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
	appId  : '7742659951067202',
	secret : 'ACpjPArIwwSfBFAuNBT5iyvubivGFFOTDsuuK4y+hGCiq03zGC659lf9JRpa0SiAiL4yMzKov5Rdvhl1OYi1Eg==',
	url    : 'http://api.globalhack4.test.lockerdome.com',
	path   : '/app_fetch_content',
	submitQuery : function(query, http) {
		var options = {
		  host : locker.url,
		  path : locker.path,
		  port : 80,
		  type : 'GET',
		  data : {
			'app_id': locker.appId,
			'app_secret': locker.secret,
			'content_id': 42
		  },
		};
		http.get(options, function(res) {
			locker.onSuccess(res);
		}).on('error', function(e) {
			console.log("Got error: " + e.message);
		});
	},

	onSuccess : function(response) {
		console.log("GET request was successful!");
		console.log(response);
	},
}
// 'app_secret': 'ACpjPArIwwSfBFAuNBT5iyvubivGFFOTDsuuK4y+hGCiq03zGC659lf9JRpa0SiAiL4yMzKov5Rdvhl1OYi1Eg==',



if (module && module.exports) {
	module.exports.alchemy = alchemy;
	module.exports.locker  = locker;
}
var query = 'Fuck this shit you motherfucker';

$.ajax({
  url: 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment',
  type: 'GET',
  data:{
    apikey : '6c3f7de7adae065674ccce9289e1a2930fc4c74f',
    text: query,
    outputMode: 'json',
    showSourceText: 1
  },
  success: function(response) {
    console.log("GET request was successful!");
    console.log(response);

    var language = response.language;
    var score = response.docSentiment.score;
    var type = response.docSentiment.type;
    var text = response.text;
  },
  error: function(xhr) {
    console.log("GET request wasn't successful");
  }
});

$.ajax({
  url: 'http://api.globalhack4.test.lockerdome.com/app_create_content',
  type: 'GET',
  data:{
    'app_id': '7741755390689346',
    'app_secret': '9EidDhiKHHK5sCCfIvkewnMWcifb0SGS362BKffRA29v/vkTm8CzsydQb2I+5ORMtFOHMsmkZLqtwc2uN/dC2g==',
    'name': 'Fun App Content',
    'thumb_url': '',
    'text': 'Ahihihih. Lol bruh.',
    'app_data': {
      'data' : 'some_data'
      }
  },
  success: function(response) {
    console.log("GET request was successful!");
    console.log(response);
  },
  error: function(xhr) {
    console.log("GET request wasn't successful");
  }
});

// var query = 'Fuck this shit you motherfucker';
//
// $.ajax({
//   url: 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment',
//   type: 'GET',
//   data: {
//     apikey : '6c3f7de7adae065674ccce9289e1a2930fc4c74f',
//     text: query,
//     outputMode: 'json',
//     showSourceText: 1
//   },
//   success: function(response) {
//     console.log("GET request was successful!");
//     console.log(response);
//
//     var language = response.language;
//     var score = response.docSentiment.score;
//     var type = response.docSentiment.type;
//     var text = response.text;
//   },
//   error: function(xhr) {
//     console.log("GET request wasn't successful");
//   }
// });

// 'app_secret': 'ACpjPArIwwSfBFAuNBT5iyvubivGFFOTDsuuK4y+hGCiq03zGC659lf9JRpa0SiAiL4yMzKov5Rdvhl1OYi1Eg==',
$.ajax({
  url: 'http://api.globalhack4.test.lockerdome.com/app_fetch_content',
  type: 'GET',
  data:{
    'app_id': '7742659951067202',
    'app_secret': 'ACpjPArIwwSfBFAuNBT5iyvubivGFFOTDsuuK4y+hGCiq03zGC659lf9JRpa0SiAiL4yMzKov5Rdvhl1OYi1Eg==',
    'content_id': 42
  },
  success: function(response) {
    console.log("GET request was successful!");
    console.log(response);
  },
  error: function(xhr) {
    console.log("GET request wasn't successful");
  }
});

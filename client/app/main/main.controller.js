'use strict';

angular.module('grabbagApp')
  .controller('MainCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    // Inject text data to scope, then do multiple GET requests?
    // var text = '';
    // var sentences = text.match( /[^\.!\?]+[\.!\?]+/g );

    var query = 'Fuck this shit you motherfucker';

    $http({
      method: 'GET',
      url: 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment',
      params: {
        apikey : '6c3f7de7adae065674ccce9289e1a2930fc4c74f',
        text: query,
        outputMode: 'json',
        showSourceText: 1
        }
      }).
      success(function (data, status, headers, config) {
        console.log("GET request was successful!");
        console.log(data);

        $scope.language = data.language;
        $scope.score = data.docSentiment.score;
        $scope.type = data.docSentiment.type;
        $scope.text = data.text;

        // Split into sentences
        // var sentences = text.match( /[^\.!\?]+[\.!\?]+/g );

      }).
      error(function (data, status, headers, config) {
        console.log("GET request wasn't successful");
      });

    // $http({
    //   method: 'GET',
    //   url: 'http://api.globalhack4.test.lockerdome.com/app_create_content',
    //   params: {
    //     'app_id': '7741755390689346',
    //     'app_secret': '9EidDhiKHHK5sCCfIvkewnMWcifb0SGS362BKffRA29v/vkTm8CzsydQb2I+5ORMtFOHMsmkZLqtwc2uN/dC2g==',
    //     'name': 'Fun App Content',
    //     'thumb_url': '',
    //     'text': 'Ahihihih. Lol bruh.',
    //     'app_data': {
    //       'data' : 'some_data'
    //       }
    //     }
    //   }).
    //   success(function (data, status, headers, config) {
    //     console.log("GET request was successful!");
    //     console.log(data);
    //
    //     // var events = data.events;
    //     // var lats = [];
    //     // var lons = [];
    //     // var coordinates = [];
    //     // for (var i=0; i < events.length; i++) {
    //     //   if (events && events[i] && events[i].venue) {
    //     //     var venue = events[i].venue;
    //     //     var address = venue.address;
    //     //     var lat = address.latitude;
    //     //     var lon = address.longitude;
    //     //     lats.push(lat);
    //     //     lons.push(lon);
    //     //     coordinates.push(new google.maps.LatLng(lat, lon));
    //     //   }
    //     // }
    //     //
    //     // console.log(coordinates);
    //     // $scope.coordinates = coordinates;
    //   }).
    //   error(function (data, status, headers, config) {
    //     console.log("GET request wasn't successful");
    //   });
  });

var app = angular.module('app',[]);

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
});

app.controller('TwittsController', ['$scope','$http', '$q', function($scope,$http,$q) {


    function refreshCarrousel(){
      setTimeout(function(){
        $(".testemonials").owlCarousel({
          autoPlay: 8000,
          autoHeight : true,
          singleItem: true,
          navigation: false,
          itemsDesktop: [1000, 1],
              itemsDesktopSmall: [900, 1],
              itemsTablet: [600, 1],
              itemsMobile: false
        });
        $("#reviews").removeClass('hide');
      },1000);
    }

    function getTwitts(){
      var d = $q.defer();

      $http.get('/twitts').
       success(function(data, status, headers, config) {
         d.resolve(data);
       }).
       error(function(data, status, headers, config) {
         d.reject(data);
       });

       return d.promise;
    }

    getTwitts()
    .then(function(data){
        $scope.twitts = data;
        refreshCarrousel();
    });

}]);

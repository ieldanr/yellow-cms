'use strict';

angular.module('siteTemplateApp')
  .controller('HomeCtrl', function ($scope, $http) {
    $scope.products = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
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
  });

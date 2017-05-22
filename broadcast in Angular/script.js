'use strict';


angular.module('scopeExample', [])
  .controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'AngularJS';
    $scope.$on("click", function(foo, data){
      console.log(data);
    })
  }])
  .controller('ListController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.names = ['Ian', 'Misko', 'Victor'];
    $rootScope.$broadcast("click", {text:"hello from list"});
  }]);

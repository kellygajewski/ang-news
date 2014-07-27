'use strict';

/**
 * @ngdoc function
 * @name angularthinksterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularthinksterApp
 */
angular.module('angularthinksterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

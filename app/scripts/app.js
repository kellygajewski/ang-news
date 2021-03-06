'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name angularthinksterApp
 * @description
 * # angularthinksterApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularthinksterApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

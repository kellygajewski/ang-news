'use strict';

app.factory('Post', function($resource){
	return $resource('https:https://amber-fire-7630.firebaseio.com/posts/:id.json');
});

app.controller('PostsCtrl', function ($scope) {
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};
	
	$scope.submitPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {url: 'http://', title: ''};
	};

	$scope.deletePost = function(index) {
		$scope.posts.splice(index, 1);
	};

});
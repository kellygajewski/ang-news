'use strict';

app.factory('Post', function($resource){
	return $resource('https:https://amber-fire-7630.firebaseio.com/posts/:id.json');
});

app.controller('PostsCtrl', function ($scope, Post) { //Post is service created in post.js
	//$scope.posts = [];
	$scope.posts = Post.get(); //sends get request to resource url without any parameters
	$scope.post = {url: 'http://', title: ''};
	
	
	$scope.submitPost = function() {
		// $scope.posts.push($scope.post);
		// $scope.post = {url: 'http://', title: ''};
		Post.save($scope.post, function (ref) {
			$scope.posts[ref.name] = $scope.post;
			$scope.post = {url: 'http://', title: ''};
		});
	};
	//Send a POST request to our posts endpoint with our post object. The save function takes a second parameter as a function for our view to update only if the request is successful  (success callback). In the callback, we get the object returned from the server as a parameter. Firebase will return the ID in an object that's a reference to the saved post in this format: {name: (postId here)} so we can create a callback to set the item on $scope.posts

	$scope.deletePost = function(postId) {
		Post.delete({id: postId}, function() {
			delete $scope.posts[postId];
		//$scope.posts.splice(index, 1);
		});
	};

});
'use strict';

app.factory('Post', function($resource) {
	return $resource('https:https://amber-fire-7630.firebaseio.com/posts/:id.json'); //Note that we added posts/:id.json onto the end of our Firebase URL. The :id denotes an optional paramater, in this case a post ID. If the post ID is present, all request types (POST, GET, DELETE) will be made to '/posts/POSTID-HERE.json'; otherwise, all request types will be made to just '/posts.json'.
});
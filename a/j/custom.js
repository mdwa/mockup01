// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

  var app = angular.module('tumblrBlog', []);

  app.controller('ListTumblr', ['$scope', function($scope) {
    $scope.test = "Hello";
  }]);

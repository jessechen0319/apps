var indexapp = angular.module("indexapp", ['ui.bootstrap']);
indexapp.controller("IndexController", function($scope) {
	$scope.isLogined = false;

	$scope.login = function(){
		console.log("login");
	};
});
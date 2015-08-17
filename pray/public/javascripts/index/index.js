var indexapp = angular.module("indexapp", ['ui.bootstrap']);
indexapp.controller("IndexController", function($scope, $http) {
	$scope.isLogined = false;

	$scope.login = function(){
		console.log("login");
	};

	$scope.insertRecord = function(){

		//prepare data content
		var dataContent = {'name': $scope.name,
					'date': $scope.date,
					'content': $scope.content};

		//main request			
		$http(
			{method: 'GET',
			params: dataContent,
			url: "/pray/insertRecord"}
		).success(function(data){
			console.log(data);
			console.log('success');
		}).error(function(){
			console.log('error');
		});
		console.log('insertRecord');
	};
});
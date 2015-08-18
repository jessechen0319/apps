var indexapp = angular.module("indexapp", ['ui.bootstrap']);
indexapp.controller("IndexController", function($scope, $http) {
	$scope.isLogined = false;
	$scope.submitClass = 'btn';
	$scope.prayData = [];
	$scope.login = function(){
		console.log("login");
	};

	$scope.insertRecord = function(){

		//prepare data content
		$scope.submitClass = 'disabled btn';
		if($scope.name && $scope.content && $scope.date){
			var dataContent = {'name': $scope.name,
					'date': $scope.date,
					'content': $scope.content};

			//main request			
			$http(
				{method: 'POST',
				params: dataContent,
				url: "/pray/insertRecord"
			}).success(function(data){
				$scope.submitClass = 'btn';
				$scope.getPrayRecords();
			}).error(function(){
				$scope.submitClass = 'btn';
			});
		} else {
			$scope.submitClass = 'btn';
		}
		
	};


	$scope.getPrayRecords = function(){

		$http(
			{method: 'GET',
			url: "/pray/getRecords"
		}).success(function(data){
			console.log(data);
			$scope.prayData = data;
		}).error(function(){

		});
	};
});
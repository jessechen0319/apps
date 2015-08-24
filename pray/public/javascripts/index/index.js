var indexapp = angular.module("indexapp", ['ui.bootstrap']);
indexapp.controller("IndexController", function($scope, $http, $modal) {
	$scope.isLogined = false;
	$scope.submitClass = 'btn';
	$scope.prayData = [];
	$scope.login = function(){
		console.log("login");
	};

	$scope.insertRecord = function(){

		//prepare data content

		var modalInstance = $modal.open({
	      animation: $scope.animationsEnabled,
	      templateUrl: 'confirmAdd.html',
	      controller: 'ConfirmAddController',
	      resolve: {
	        submitObject: function () {
	          return {'name': $scope.name,
					'date': $scope.date,
					'content': $scope.content};
	        }
	      }
    	});

    	modalInstance.result.then(function (submitObject) {
		     	if(submitObject.name && submitObject.content && submitObject.date){
					//main request			
					$http(
						{method: 'POST',
						params: submitObject,
						url: "/pray/insertRecord"
					}).success(function(data){
						$scope.submitClass = 'btn';
						$scope.getPrayRecords();
					}).error(function(){
						$scope.submitClass = 'btn';
					});
				} else {
					console.log($modal);
					$scope.submitClass = 'btn';
				}
		    }, function () {
		     	$log.info('Modal dismissed at: ' + new Date());
		    });

		/*$scope.submitClass = 'disabled btn';
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
			console.log($modal);
			$scope.submitClass = 'btn';
		}*/
		
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

angular.module('indexapp').controller('ConfirmAddController', function ($scope, $modalInstance, submitObject) {
	$scope.submitObject = submitObject;
	$scope.ok = function (){
		$modalInstance.close(submitObject);
	};
	$scope.cancel = function(){
		$modalInstance.dismiss("cancel");
	};
});

var myFirstApp = angular.module('myFirstApp', []);

myFirstApp.config(['$routeProvider',function($routeProvider) 
{
    
    $routeProvider.when('/myProfile', 
	{
        	templateUrl: 'templates/profile.html',
        	controller: 'profileController'
    	});
    $routeProvider.when('/contactus', 
	{
        	templateUrl: 'templates/contact.html',
        	controller: 'contactController'
        });
	$routeProvider.when('/home', 
	{
        	templateUrl: 'templates/home.html',
        	controller: 'homeController'
        });
     $routeProvider.otherwise({
        redirectTo: '/home'
      });
    
}]);

myFirstApp.controller('ProfileCtrl', function($scope,$http) {
  
  
  $http.get('json/myProfile.json',{}).success(function(data){$scope.items = data;});
  
}); 

myFirstApp.controller('ContactCtrl', function($scope,$http) {
  
  
  $http.get('json/contactus.json',{}).success(function(datas){
			$scope.itemss = datas;
		});
  
}); 

myFirstApp.controller('profileController', function($scope) {
     
    $scope.message = 'Profile';
     
});
 
myFirstApp.controller('contactController', function($scope) {
 
    $scope.message = 'Contact Us';
 
});
myFirstApp.controller('homeController', function($scope) {
 
    $scope.message = 'home';
 
});

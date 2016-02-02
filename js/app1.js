var myFirstApp = angular.module('myFirstApp', ['ionic']);
myFirstApp.config(function ($stateProvider, $urlRouterProvider) 
{
  $stateProvider
 .state('/home', 
     {
    url: '/home',
    views: {
      'menuContent': 
      {
        templateUrl: 'templates/app/home.html',
        controller: 'homeController'
      }
    }
  })
  
  .state('app.plp', 
      {
    parent: 'app',
    url: '/plp/:id',
    views: 
      {
      'menuContent': {
        templateUrl: 'templates/app/plp.html',
        controller: 'plpController'
      }
    }
  })
  
  .state('/myProfile', 
	{
         url: '/profile',
    views: 
      {
      'menuContent': 
        {	
        templateUrl: 'templates/app/profile.html',
        	controller: 'profileController'
        }
      }
    });
   
    .state('/contactus', 
	{
        	 url: '/contact',
    views: 
      {
      'menuContent':
          
          {
            templateUrl: 'templates/contact.html',
        	controller: 'contactController'
          }
      }
    });
        
        
        
  $urlRouterProvider.otherwise('/app/home');
    });

 
myFirstApp.controller('homeController', function($scope,$http) {
     
    
			$scope.message = 'hello';
});

myFirstApp.controller('plpController',function($scope,Data,$http,$stateParams,$location,$rootScope) {
    
    Data.plpID = $stateParams.id;
    
  $http.get('json/category'+$stateParams.id+'Details.json',{}).success(function(data)
        {
			$scope.productByCate = data;
		});
   
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

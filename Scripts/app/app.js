var app = angular.module('StarwarsApp', [
    'ngRoute',  
    'ngTable',
	'peopleModule'
    ]);
	
app.config(function ($routeProvider) {
    $routeProvider.when("/People", {
        controller: "peopleController",
        templateUrl: "People/Index"
    });   
});

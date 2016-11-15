
myApp = angular.module('myApp',['ngRoute'])

myApp.config(function($routeProvider){
    $routeProvider
    .when('/someplace',{
            controller: "somecontroller",
            controllerAs: "sC",
            templateUrl: "partials/someplace.html"
        })
})

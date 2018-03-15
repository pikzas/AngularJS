var app = angular.module('myApp',[]);

app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"app.html",
        controller:"appCtrl"
    }).when('/tomato',{
        template:'potato'
    })
});

app.controller('appCtrl',function ($scope) {
    $scope.data = {
        message:"i am data"
    }
});
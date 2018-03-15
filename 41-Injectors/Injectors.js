var myApp = angular.module('myApp',[]);
myApp.factory('DataService',function () {
       return {
           message:'i am data'
       }
    })
// angular.injector(['myApp']).invoke(function(DataService){
//         alert(DataService.message);
//     })
// myApp.controller('myCtrl',function ($scope,DataService) {
//         $scope.data = DataService;
//     })
myApp.controller('myCtrl',function ($scope,$injector) {
    $injector.invoke(function(DataService){
        $scope.data = DataService;
        alert(DataService.message);
    })
})
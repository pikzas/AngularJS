angular.module('myApp',[])
    .factory('myService',function () {
        return {message:"i am data from service"};
    })
    .controller('firstCtrl',function ($scope,myService) {
        $scope.data = myService;
    })
    .controller('secondCtrl',function ($scope,myService) {
        $scope.data = myService;
    })

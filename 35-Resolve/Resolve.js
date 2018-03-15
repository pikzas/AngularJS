angular.module('myApp',[])
    .config(function ($routeProvider) {
        $routeProvider.when("/",{
            templateUrl:'app.html',
            controller:'appCtrl',
            resolve: {
                return : function ($q,$timeout) {
                    var defer = $q.defer();
                    $timeout.timeout(function () {
                        defer.resolve();
                    },2000);
                    return defer.promise;
                }
            }
        })
    })
    .controller('appCtrl',function ($scope) {
        $scope.data = "i am in";
    })

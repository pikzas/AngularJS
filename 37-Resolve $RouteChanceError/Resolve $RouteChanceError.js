angular.module('myApp',[])
    .factory('DataService',function () {
        var Datas = {};
        Datas.cast = [
            {
                name:"alex",
                age:1213123
            },
            {
                name:"blex",
                age:1378787897
            },
            {
                name:"clex",
                age:1478897
            }];
        return Datas;
    })
    .controller('myCtrl',function ($scope,DataService) {
        $scope.data = DataService;
    })

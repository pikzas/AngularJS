angular.module('myApp',[])
    .factory('DataService',function () {
        var datas = {};
        datas.cast = [
            {
              name:"Alex",
              age:12,
              mobile:'11231312312'
            },
            {
                name:"leo",
                age:122,
                mobile:'00000000045'
            },
            {
                name:"yummy",
                age:12,
                mobile:'kekekekeke'
            },
            {
                name:"james",
                age:88,
                mobile:'dfasf'
            }
        ];
        return datas;
    })
    .controller('myCtrl',function ($scope,DataService) {
        $scope.data = DataService;
    })

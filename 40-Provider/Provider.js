var myApp = angular.module('myApp',[]);

// myApp.factory('DataService',function () {
//    return {
//        message:"amazing"
//    }
// })

// myApp.config(function($provide){
//     $provide.factory('DataService',function () {
//         return {
//             message:"amazing again"
//         }
//     })
// });

// myApp.config(function($provide){
//     $provide.provider("DataService",function () {
//         return {
//             $get: function () {
//                 return {
//                     message:"amazing ing !!!"
//                 }
//             }
//         }
//     })
// })

myApp.provider("DataService",function () {
    var type;
    console.log("222");
    return {
        setType:function (value) {
            type = value
        },
        $get: function () {
            return {
                message: type+"amazing ing !!!"
            }
        }
    }
})

myApp.config(function(DataServiceProvider){
    console.log("111");
    DataServiceProvider.setType("xixi");
})


myApp.controller('myCtrl',function ($scope,DataService) {
    $scope.data = DataService;
});

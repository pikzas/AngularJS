angular.module('myApp',[])
    .controller('myCtrl',function ($scope,$q) {
        var defer = $q.defer();

        defer.promise.then(function (weapon) {
            alert('default weapon is '+ weapon);
            return {weapon:"bow"};
        },function (data) {
            alert('氪金失败 '+ weapon);
        }).then(function (data) {
            alert('my weapon is '+ data.weapon);
            return "axe";
        })
        .then(function (data) {
            alert('my weapon is '+ data);
        })

        defer.resolve("sword");
    })

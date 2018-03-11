angular.module('myApp',[])
    .controller('myCtrl',function ($scope) {
        $scope.callFun = function (number,message,network) {
            alert(number + " said : "+ message +" by " +network);
        }
    })
    .directive('phone',function () {
        return {
            restrict:'AE',
            scope:{
                number:'@',
                network:'=',
                call:'&'
            },
            template:'<div class="panel">Number: {{number}} Network:' +
            '<select ng-model="network" >' +
            '<option ng-repeat="network in networks">{{network}}</option>' +
            '</select></div>' +
            '<input type="text" ng-model="message">' +
            '<div class="button" ng-click="call({num:number,msg:message,net:network})">call</div>'
            ,
            link:function (scope) {
                scope.networks = ['aaa','bbb','ccc'];
                scope.network = scope.networks[0];
            }
        }
    })
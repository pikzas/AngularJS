angular.module('myApp',[])
    .controller('MyCtrl',function ($scope) {
        this.open = function () {
            alert("a am open");
        }
        this.title = "i am a button";
    })

angular.module('aa.table', [])
.directive("aaTable",function(){
    return{
        templateUrl:"templates/aatable.html",
        scope: {header:"=",data:"=" } ,
        restrict:"E",
        controller:function($scope){
        },
        link:function($scope,$ele,$attr){
        }
    };
});

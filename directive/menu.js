angular.module("AA",[])
.directive("aaMenu",function($http){
    var ret={
        "restrict":"E",
        "controller":function(){},
        "templateUrl": "templates/menu.html",
        "link":function($scope,$ele,$attr){
            $http.get($attr["url"])
            .success(function(data){
                $scope.items=data;
            })
             
        }

    };
    return ret;
});

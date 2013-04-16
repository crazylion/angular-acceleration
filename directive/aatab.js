angular.module('aa.tabs', [])
.controller('TabsController', ['$scope', '$element', function($scope, $element) {
    $scope.panels=[];
    this.addPanel=function(panel){
        $scope.panels.push(panel);
        if($scope.panels.length){
            $scope.active(0);
        
        }
    };
    $scope.active=this.active=function(index){
        if($scope.activeIndex!=undefined){
            $scope.panels[$scope.activeIndex]["active"]=false;
        
        }
        $scope.panels[index]["active"]=true;
        $scope.activeIndex = index;
    };

}])
.directive("aaTab",function(){
    return {
        priority:0,
        templateUrl:"templates/aatab.html",
        restrict:"E",
        scope:{},
        controller: 'TabsController',
        transclude:true,
        link:function($scope,$ele,$attr){
        }

    };
}).directive("aaPanel",['$parse',function($parse) {
   return {
       priority:1,
    restrict:"E",
    replace:true,
    transclude:true,
    require:"^aaTab",
    controller: 'TabsController',
    templateUrl: "templates/aapanel.html",
    scope: {panelTitle:"@"},
    link:function($scope,$ele,$attr,tabsCtrl){
        $scope.active=false;
        tabsCtrl.addPanel($scope);
//         tabsCtrl.active(0);
//         console.log($ele);
//         $scope.$parent.addPanel;
    
    }
   } 
}]);

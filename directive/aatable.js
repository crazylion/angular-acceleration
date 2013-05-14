angular.module('aa.table', [])
.directive("aaTable",function(){
    return{
        templateUrl:"templates/aatable.html",
        scope: {header:"=",data:"=",isHash:"=" } ,
        restrict:"E",
        controller:function($scope){
            $scope.setOrderByKey=function(key){
                console.log("set");
                $scope.orderByKey=key; 
                $scope.reverse=!$scope.reverse;
            }
        },
        link:function($scope,$ele,$attr){
            $scope.headerData=[];
            $scope.bodyData=[];
            $scope.orderByKey="";
            $scope.reverse=false;
            if($scope.isHash){
                $scope.headerData = $scope.header;
                $scope.bodyData = $scope.data;
                
            }else{
                if($scope.header){
                    for(var i=0;i<$scope.header.length;i++){
                        $scope.headerData.push({
                            label: $scope.header[i],
                            key: $scope.header[i]
                        }); 
                    }
                    for(var i=0;i<$scope.data.length;i++){
                        var item={};
                        for(var j=0;j<$scope.data[i].length;j++){
                            item[$scope.headerData[j].key]= $scope.data[i][j];
                        }
                        $scope.bodyData.push(item);
                    }
                }
            
            }
        }
    };
});

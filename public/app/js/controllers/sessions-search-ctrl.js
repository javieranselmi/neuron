(function() {
    var moduleName     = 'neuron',
        controllerName = 'sessionsSearchController';
    controller.$inject = ["$scope","$http"];

    function controller($scope, $http) {

        $scope.sessions = [];
        //holis
        $scope.a = "a";
        $http.get('/api/v1/sessions').then(function(result){
            $scope.sessions = result.data;
        });

    };
    angular.module(moduleName).controller(controllerName, controller);
})();
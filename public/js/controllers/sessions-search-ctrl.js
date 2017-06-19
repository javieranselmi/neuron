(function() {
    var moduleName     = 'neuron',
        controllerName = 'sessionsSearchController';
    controller.$inject = ["$scope","$http"];

    function controller($scope, $http) {

        $scope.sessions = [];
        $http.get('http://192.168.99.100:3001/sessions').then(function(result){
            $scope.sessions = result.data;
        });

    };
    angular.module(moduleName).controller(controllerName, controller);
})();
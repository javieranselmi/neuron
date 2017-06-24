(function() {
    var moduleName     = 'neuron',
        controllerName = 'sessionsCreateController';
    controller.$inject = ["$scope","$resource","$filter","$state"];

    function controller($scope, $resource,$filter,$state) {
        var Professional = $resource('/api/v1/professionals');
        var Patient = $resource('/api/v1/patients');
        var Service = $resource('/api/v1/services');
        var Session = $resource('/api/v1/sessions');

        var professionals = Professional.query( function() {
            $scope.professionals = professionals;
        });

        var patients = Patient.query( function() {
            $scope.patients = patients;
        });

        var services = Service.query( function() {
            $scope.services = services;
        });

        $scope.session = {};

        $scope.submit = function() {
            session = new Session();
            Object.assign(session, $scope.session);
            session.date = $filter('date')(session.date, 'yyyy-MM-dd');
            session.services = getChosenServices();
            session.$save().then(function(){
                window.alert("Se ha guardado con éxito la sesión")
                $state.go('sessions.search');
            });
        };

        function getChosenServices() {
            return $scope.services.filter(function(service) {
                return service.chosen;
            })
        }







    };
    angular.module(moduleName).controller(controllerName, controller);
})();
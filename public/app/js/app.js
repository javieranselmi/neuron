var app = angular.module("neuron", ["ui.router"]);

app.factory('logger',['$log',function($log){
    return {request: function(config) {
        if (config.data) {
            $log.debug(config.data);}
        return config;
    }}
}]);



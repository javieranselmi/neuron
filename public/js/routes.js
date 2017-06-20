//Routes
(function() {
    var moduleName = 'neuron';

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

        $stateProvider.state('home', {
            url: '/',
            // controller: 'QuestionnaireController',
            template: '<h1>Welcome!<h1>'
        });

        $stateProvider.state('sessions', {
            url: '/sessions',
            // controller: 'QuestionnaireController',
            template: '<ui-view></ui-view>',
            abstract: true
        });

        $stateProvider.state('sessions.search', {
            url: '/search',
            templateUrl: '../html/sessions/search.html',
            controller: 'sessionsSearchController'
        });

        $stateProvider.state('sessions.create', {
            url: '/create',
            templateUrl: '../html/sessions/create.html',
            controller: 'sessionsCreateController'
        });

    }
    angular.module(moduleName).config(config);
})();
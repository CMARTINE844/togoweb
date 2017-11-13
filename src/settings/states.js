(function () {
    'use strict';

    angular
        .module('focus-track')
        .config(StatesDefinition);

    StatesDefinition.$inject = ['$stateProvider', '$urlRouterProvider'];

    function StatesDefinition($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        var loginState = {
            controller: 'LoginController',
            controllerAs: 'vm',
            name: 'login',
            url: '/login',
            templateUrl: './views/login/login.view.html'
        };

        var projectState = {
            controller: 'ProjectController',
            controllerAs: 'vm',
            name: 'project',
            params: {
                user: null
            },
            url: '/project',
            templateUrl: './views/project/project.view.html'
        };

        $stateProvider.state(loginState);
        $stateProvider.state(projectState);
    }
})();
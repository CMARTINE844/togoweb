(function () {
    'use strict';

    angular
        .module('focus-track')
        .factory('ProjectService', ProjectService);

    ProjectService.inject = ['$http', 'EndPointService'];
    function ProjectService($http, EndPointService) {
        var BASE_URL = EndPointService.get();
        var URL = BASE_URL + '/apexrest/Proyectos';

        var service = {
            get: get
        };

        return service;

        ////////////////
        function get(filter) {
            // @todo set correct type of request
            var localUrl = URL + '?codigoagente=' + filter.codigoagente + '&activo=' + filter.activo;
            return $http
                .get(localUrl)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
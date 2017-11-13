(function () {
    'use strict';

    angular
        .module('focus-track')
        .factory('Logger', Logger);

    Logger.inject = ['$http', 'EndPointService'];
    function Logger($http, EndPointService) {
        var BASE_URL = EndPointService.get();
        var URL = BASE_URL + '/apexrest/Registros';

        var service = {
            get: get,
            post: post
        };

        return service;

        ////////////////
        function get(filter) {
            // @todo set correct type for get            
            var localUrl = URL + '?codigoagente=' + filter.codigoagente + '&idproyecto=' + filter.idproyecto;
            localUrl += typeof filter.aprobado !== 'undefined' ? '&aprobado=' + filter.aprobado : '';
            localUrl += typeof filter.rechazado !== 'undefined' ? '&rechazado=' + filter.rechazado : '';
            localUrl += '&limite=' + filter.limite;
            return $http
                .get(localUrl)
                .then(function (response) {
                    return response.data;
                });
        }

        function post(log) {
            // @todo Check log's properties
            return $http
                .post(URL, log)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
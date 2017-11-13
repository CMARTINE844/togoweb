(function () {
    'use strict';

    angular
        .module('focus-track')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', 'EndPointService'];
    function CategoryService($http, EndPointService) {
        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return $http
                .get('/data/categories.json')
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
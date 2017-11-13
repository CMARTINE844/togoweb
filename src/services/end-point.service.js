(function () {
    'use strict';

    angular
        .module('focus-track')
        .factory('EndPointService', EndPointService);

    EndPointService.inject = [];
    function EndPointService() {
        var test = true;

        var service = {
            get: get
        };

        return service;

        ////////////////
        function get() {
            return 'https://' +
                (test ? 'focusproxy.herokuapp.com/services' : '')
                + '';
        }
    }
})();
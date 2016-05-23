(function () {
    'use strict';

    angular
        .module('jhipsterWebsocketSampleApplicationApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();

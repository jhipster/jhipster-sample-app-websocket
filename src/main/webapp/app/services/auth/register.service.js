(function () {
    'use strict';

    angular
        .module('sampleWebsocketApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();

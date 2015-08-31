'use strict';

angular.module('samplewebsocketApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



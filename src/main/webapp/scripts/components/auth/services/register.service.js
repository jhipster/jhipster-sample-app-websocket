'use strict';

angular.module('sampleWebsocketApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });



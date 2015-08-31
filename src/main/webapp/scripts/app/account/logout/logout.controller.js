'use strict';

angular.module('samplewebsocketApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });

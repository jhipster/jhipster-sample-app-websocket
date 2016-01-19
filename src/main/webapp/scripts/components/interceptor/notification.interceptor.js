 'use strict';

angular.module('samplewebsocketApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-samplewebsocketApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-samplewebsocketApp-params')});
                }
                return response;
            }
        };
    });

 'use strict';

angular.module('sampleWebsocketApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-sampleWebsocketApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-sampleWebsocketApp-params')});
                }
                return response;
            }
        };
    });

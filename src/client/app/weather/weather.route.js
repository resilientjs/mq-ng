(function() {
    'use strict';

    angular
        .module('app.graph')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'weather',
                config: {
                    url: '/',
                    templateUrl: 'app/weather/weather.html',
                    controller: 'WeatherController',
                    controllerAs: 'vm',
                    title: 'graph',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-lock"></i> Weather'
                    }
                }
            }
        ];
    }
})();

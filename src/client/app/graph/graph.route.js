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
                state: 'graph',
                config: {
                    url: '/',
                    templateUrl: 'app/graph/graph.html',
                    controller: 'LineCtrl',
                    controllerAs: 'vm',
                    title: 'graph',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Graph'
                    }
                }
            }
        ];
    }
})();

(function () {
    'use strict';

    angular
        .module('app.graph')
        .controller('GraphController', GraphController);

    GraphController.$inject = ['logger'];
    /* @ngInject */
    function GraphController(logger) {
        var vm = this;
        vm.title = 'Graph';

        activate();

        function activate() {
            logger.info('Activated Graph View');
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('app.weather')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['logger'];
    /* @ngInject */
    function WeatherController(logger) {
        var vm = this;
        vm.title = 'Weather';

        activate();

        function activate() {
            logger.info('Activated Weather View');
        }
    }
})();

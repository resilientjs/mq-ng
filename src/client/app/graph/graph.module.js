(function () {
    'use strict';

    angular.module('app.graph', [
        'app.core',
        'app.widgets',
        'chart.js',
      ])
    .config(['ChartJsProvider', function (ChartJsProvider) {

    // Configure all charts
    ChartJsProvider.setOptions({
      colours: ['#FF5252', '#FF8A80'],
      responsive: false
    });

    // Configure all line charts
    ChartJsProvider.setOptions('Line', {
      datasetFill: false
    });
}])



})();

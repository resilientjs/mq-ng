(function () {
    'use strict';

    angular
        .module('app.graph')
        .controller('LineCtrl', LineCtrl);

    LineCtrl.$inject = ['logger', '$timeout', '$scope'];
    /* @ngInject */
    function LineCtrl(logger, $timeout, $scope) {
        var vm = $scope;
        vm.title = 'LineCtrl';

        activate();

        function activate() {
            logger.info('Activated Line Chart');
        }
vm.days = {sunday:0, monday:33, tuesday:0, wednesday:66, thursday:33, friday:99, saturday:66};
 vm.labels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  vm.series = ['Score'];
  vm.data = [
 [vm.days.sunday, vm.days.monday, vm.days.tuesday, vm.days.wednesday, vm.days.thursday,  vm.days.friday, vm.days.saturday]
  ];
  vm.onClick = function (points, evt) {
    console.log(points, evt);
  };

  vm.refreshData = function () {
    vm.data = [
    [vm.days.sunday, vm.days.monday, vm.days.tuesday, vm.days.wednesday, vm.days.thursday,  vm.days.friday, vm.days.saturday]
    ];
  };

  // // Simulate async data update
  // $timeout(function () {
  //   vm.data = [
  //     [vm.days.sunday, vm.days.monday, vm.days.tuesday, vm.days.wednesday, vm.days.thursday, vm.days.saturday]
  //   ];
  // }, 3000);

    }
})();


/* jshint -W117, -W030 */
describe('weather routes', function () {
    describe('state', function () {
        var view = 'app/admin/weather.html';

        beforeEach(function() {
            module('app.weather', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state weather to url /weather ', function() {
            expect($state.href('admin', {})).to.equal('/weather');
        });

        it('should map /admin route to admin View template', function () {
            expect($state.get('weather').templateUrl).to.equal(view);
        });

        it('of admin should work with $state.go', function () {
            $state.go('weather');
            $rootScope.$apply();
            expect($state.is('weather'));
        });
    });
});

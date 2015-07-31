'use strict';
describe('Test about module', function() {
    beforeEach(function(){
        angular.mock.module('ngAnimate', []);
        angular.mock.module('ngTouch', []);
        angular.mock.module('ngSanitize', []);
        angular.mock.module('ui.router', []);
        angular.mock.module('pascalprecht.translate', []);

        module('<%%=applicationName%>', ['ngAnimate',
            'ngTouch',
            'ngSanitize',
            'ui.router',
            'pascalprecht.translate']);
    });

    it('module and test loaded', function() {
        expect(true).toBe(true);
    });
});

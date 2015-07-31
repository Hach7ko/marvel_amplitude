'use strict';
describe('A suite', function() {
    beforeEach(module('<%%=applicationName%>'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('contains spec with an expectation', function() {
        expect(true).toBe(true);
    });
});

'use strict';
describe('session', function() {

    beforeEach(module('<%%=applicationName%>'));

    it('contains spec with an expectation', inject(['session', function(session) {
        expect(session.init()).toBeUndefined();
    }]));
});

'use strict';
/**
 * TIMEOUT
 */
/*@ngInject*/
module.exports = function (TIMEOUT) {
    var service = {};

    service.waiting = true;

    function launchTimeout(callback) {
        // Launch the timeout
        Kiwapp.session().launchTimeout(function (time) {

            Kiwapp.session().end().start();

            // If the application is not in waiting mode we send the end event stats
            if(!service.waiting) {
                Kiwapp.log('End user session');
                // We launch a new session event stat
                Kiwapp.stats().event('Fin de session', {sessionDuration: time});
                callback();
            }

            service.waiting = true;

        }, TIMEOUT, true);
    }

    service.init = function init(callback) {
        // Launch the session interaction
        Kiwapp.session().end().start();

        launchTimeout(callback);

        document.body.addEventListener('touchstart', function () {
            // Stop the timeout
            Kiwapp.session().resetTimeout();
            if(service.waiting) {
                // The application was in waiting mode (no user)
                // We launch a new session event stat
                Kiwapp.log('Start user session');
                Kiwapp.stats().event('Début de session');
                // We aren't in waiting mode anymore
                service.waiting = false;
            }
        });

        document.body.addEventListener('touchend', function () {
            launchTimeout(callback);
        });
    };

    service.stopTimeout = function stopTimeout() {
        Kiwapp.session().resetTimeout();
    };

    return service;
};

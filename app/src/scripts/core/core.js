'use strict';

angular.module('<%%=applicationName%>', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate'
])
    .constant('TIMEOUT', 60 * 1000) // 60 secs
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .service('session', require('./services/session'))
    .run(function (session, $state) {

        session.init(function() {
            $state.go('home');
        });

        /**
         * Android keyboard
         */
        // With this lines you correct the android keyboard comportment for the form
        document.getElementsByTagName('body')[0].style.height = window.innerHeight + 'px';
        document.getElementsByTagName('html')[0].style.height = window.innerHeight+ 'px';
    })
    .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
        /**
         * Angular application configuration
         */
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');

        /**
         * Kiwapp configuration
         */

        // No rotation (this application is mode landscape only)
        Kiwapp.rotate('landscape');

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.preferredLanguage('en-EN');
    })
;


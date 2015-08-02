'use strict';

require('../creator/creator');

angular.module('marvel_amplitude', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'pascalprecht.translate',
    'ngMaterial',
    'creator'
])
    .controller('HomeCtrl', require('./controllers/HomeCtrl'))
    .service('events', require('./services/events.js'))
    .service('search', require('./services/search.js'))
    .factory('history', require('./services/history.js'))
    .factory('modal', require('./services/modal.js'))
    .run(function (history) {
        // Force the module init
        history.init();

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
                url: '/home',
                templateUrl: 'core/partials/home.html',
                controller: 'HomeCtrl'
            });

        $urlRouterProvider.otherwise('/home');

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.preferredLanguage('en-EN');
    })
;


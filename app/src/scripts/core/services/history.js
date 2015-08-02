'use strict';
/*@ngInject*/
module.exports = function ($rootScope, $state) {

    var service = {};

    service.init = function() {
        service.history = [];
        service.currentState = null;
    };

    $rootScope.$on('$stateChangeSuccess', function (e, to, toParams) {
        if (to.name === 'home') {
            service.reset();
        } else if (toParams.screenName === 'Panier') {

            // Reset the breadcrumb and add the Cart name
            service.reset();
            service.addState(to, toParams);
        } else {

            // Iterate for find if this occurance already exist
            var back = false;
            for (var i = 0; i < service.history.length; i++) {
                if (service.history[i].name === toParams.screenName) {
                    service.back(i+1);
                    back = true;
                }
            }
            if(!back) {
                service.addState(to, toParams);
            }
        }
    });

    service.reset = function () {
        service.history = [];
        service.currentState= '';
    };

    service.back = function (level) {
        var prev;

        while (service.history.length >= level && level !== 0) {
            prev = service.history.pop();
        }
        if (prev) {
            $state.go(prev.type, prev.params, {inherit: false});
        } else {
            $state.go('home', null, {inherit: false});
        }
    };

    service.addState = function (state, stateParams) {
        if(stateParams.screenName && service.currentState !== stateParams.screenName) {
            service.history.push({
                type: state.name,
                params: stateParams,
                name: stateParams.screenName
            });
            service.currentState = stateParams.screenName;
        }
    };

    service.getBreadcrumb = function () {
        var breadcrumb = [];
        for(var i = 0; i < service.history.length; i++) {
            if(service.history[i].name) {
                breadcrumb.push(service.history[i].name);
            }
        }

        return breadcrumb;
    };

    return service;

};

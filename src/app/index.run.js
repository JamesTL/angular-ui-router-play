(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log,$rootScope) {

        $rootScope.currentUser='jl';

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
            console.log('data', toState);


            var requireLogin = toState.data.requireLogIn;

            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                // get me a login modal!
            }
        });

        $log.debug('runBlock end');
    }

})();

/**
 * Created by jameslove on 30/06/15.
 */

(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .controller(AboutController, 'AboutController')

    /** @ngInject */

    function AboutController() {

        var vm = this;

        console.log(vm);

    }

})();
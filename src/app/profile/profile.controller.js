/**
 * Created by jameslove on 01/07/15.
 */


(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .controller(ProfileController, 'ProfileController')

    /** @ngInject */

    function ProfileController() {

        var vm = this;
        vm.time = 2;
        console.log(vm);

    }

})();
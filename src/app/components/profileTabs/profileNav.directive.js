(function () {
    'use strict';
    angular
        .module('angularUiRouterPlay')
        .directive(myProfileNav, 'myProfileNav');


    /** @ngInject */
    function  myProfileNav() {
        var directive = {
            restrict: 'E',
            replace:true,
            templateUrl: 'app/components/profileTabs/profileTabs.html',
            scope: {},
            controller:ProfileController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    };

})()
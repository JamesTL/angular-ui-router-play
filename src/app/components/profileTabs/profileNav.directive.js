(function () {
    'use strict';
    angular
        .module('angularUiRouterPlay')
        .directive(myProfileNav, 'myProfileNav');


    /** @ngInject */
    function  myProfileNav() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/components/profileTabs/profileTabs.html',
            scope: {},
            controller: ProfileController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;


    };

    /** @ngInject */
    function ProfileController(moment) {
        var vm = this;

        // "vm.creation" is avaible by directive option "bindToController: true"
        vm.relativeDate = moment(vm.creationDate).fromNow();
    }

})()
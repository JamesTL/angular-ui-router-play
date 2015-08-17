(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        // var test =$rootScope.currentUser;
        var anon = {
            name: 'anon',
            abstract: true,
            template: '<div ui-view></div>'
        };

        var home = {
            name: 'anon.home',
            url: '/',
            views: {
                '': {templateUrl: 'app/main/main.html'}
            },
            controller: 'MainController',
            controllerAs: 'main'
        };
//ABOUT
        var about = {
            name: 'anon.about',
            url: '/about',
            views: {
                '': {templateUrl: 'app/about/about.html'},
                'right-col@anon.about': {template: "right col about"}
            }
        };
        //Authentticated
        var authenticated = {

            name: 'authenticated',
            abstract: true,
            template: '<div ui-view></div>',
            data: {

                requireLogIn: true
            }
        }
//PROFILE
        var profile = {

            name: 'authenticated.profile',
            url: '/profile',
            views: {
                '': {templateUrl: 'app/profile/profile.html'},
                'right-col@authenticated.profile': {
                    template: '<p>right col profile </p><div ui-view="320-top-profile"></div>'
                },
                '320-top-profile@authenticated.profile': {templateUrl: 'assets/templates/ad-zones/profile/zone-right-col-top-280.html'}

            }
        };
        var profiletimeline = {
            name: 'authenticated.profile.timeline',
            url: '/timeline',

            views: {

                'profile-main@authenticated.profile': {
                    template: 'Timeline content here'
                },
                '320-top-profile@authenticated.profile': {template: "Timeline - banner ad code here"}
            }

        };
        var profileHandhistory = {
            name: 'authenticated.profile.handhistory',
            url: '/handhistory',
            views: {

                'profile-main@authenticated.profile': {
                    template: 'Handhistory feed content here'
                },
            '320-top-profile@authenticated.profile': {template: "Hand History - banner ad code here"}
            }
        };
        var profileNotifications = {
            name: 'authenticated.profile.notifications',
            url: '/notifications',
            views: {

                'profile-main@authenticated.profile': {
                    template: 'Notifications feed content here'
                },
                '320-top-profile@authenticated.profile': {template: "Notifications - banner ad code here"}
            }
        };
        var profileFollowing = {
            name: 'authenticated.profile.following',
            url: '/following',
            views: {

                'profile-main@authenticated.profile': {
                    template: 'Following feed content here'
                },
                '320-top-profile@authenticated.profile': {template: "Following - banner ad code here"}
            }
        };
        var profileFollowers = {
            name: 'authenticated.profile.followers',
            url: '/followers',
            views: {

                'profile-main@authenticated.profile': {
                    template: 'Followers feed content here'
                },
                '320-top-profile@authenticated.profile': {template: "Followers - banner ad code here"}
            }

        };

        $stateProvider
            .state(anon)
            .state(home)
            .state(about);
        $stateProvider
            .state(authenticated)
            .state(profile)
            .state(profiletimeline)
            .state(profileNotifications)
            .state(profileHandhistory)
            .state(profileFollowing)
            .state(profileFollowers);

        $urlRouterProvider.otherwise('/');
    }

})();

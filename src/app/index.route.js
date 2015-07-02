(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {

        var home = {
            name: 'home',
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        };
//ABOUT
        var about = {
            name: 'about',
            url: '/about',
            views: {
                '': {templateUrl: 'app/about/about.html'},
                'right-col@about': {template: "right col about"}
            }
        };
//PROFILE
        var profile = {

            name: 'profile',
            url: '/profile',
            data: {

                requireLogIn: true
            },
            views: {
                '': {templateUrl: 'app/profile/profile.html'},
                'right-col@profile': {
                    template: 'right col profile'
                }
            }
        };
        var profiletimeline = {
            name: 'profile.timeline',
            url: '/timeline',

            views: {

                'profile-main@profile': {
                    template: 'Timeline content here'
                }
            }

        };
        var profileHandhistory = {
            name: 'profile.handhistory',
            url: '/handhistory',
            views: {

                'profile-main@profile': {
                    template: 'Handhistory feed content here'
                }
            }
        };
        var profileNotifications = {
            name: 'profile.notifications',
            url: '/notifications',
            views: {

                'profile-main@profile': {
                    template: 'Notifications feed content here'
                }
            }
        };
        var profileFollowing = {
            name: 'profile.following',
            url: '/following',
            views: {

                'profile-main@profile': {
                    template: 'Following feed content here'
                }
            }
        };
        var profileFollowers = {
            name: 'profile.followers',
            url: '/followers',
            views: {

                'profile-main@profile': {
                    template: 'Followers feed content here'
                }
            }

        };

        $stateProvider
            .state(home)
            .state(about)
            .state(profile)
            .state(profiletimeline)
            .state(profileNotifications)
            .state(profileHandhistory)
            .state(profileFollowing)
            .state(profileFollowers);

        $urlRouterProvider.otherwise('/');
    }

})();

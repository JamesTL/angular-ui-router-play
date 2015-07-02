(function () {
    'use strict';

    angular
        .module('angularUiRouterPlay')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            });
        $stateProvider
            .state('about', {
                url: '/about',
                views: {
                    '': {templateUrl: 'app/about/about.html'},
                    'right-col@about': {template: "right col about"}
                }

            });



        $stateProvider.
            state('profile', {

                url: '/profile',
                views: {
                    '': {templateUrl: 'app/profile/profile.html'},
                    'right-col@profile': {
                        template: 'right col profile'
                    }
                }

            })
            .state('profile.timeline', {

                url: '/profile/timeline',

                views: {

                    'profile-main@profile': {
                        template: 'Timeline content here'
                    }
                }

            })
            .state('profile.handhistory', {

                url:'/profile/handhistory',
                views: {

                    'profile-main@profile': {
                        template: 'Handhistory feed content here'
                    }
                }

            })
            .state('profile.notifications', {

                url:'/profile/notifications',
                views: {

                    'profile-main@profile': {
                        template: 'Notifications feed content here'
                    }
                }

            })
            .state('profile.following', {

                url:'/profile/following',
                views: {

                    'profile-main@profile': {
                        template: 'Following feed content here'
                    }
                }

            })
            .state('profile.followers', {

                url:'/profile/followers',
                views: {

                    'profile-main@profile': {
                        template: 'Followers feed content here'
                    }
                }

            });

        $urlRouterProvider.otherwise('/');
    }

})();

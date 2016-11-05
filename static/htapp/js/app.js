angular.module('htApp', ['ui.router', 'ngResource', 'htApp.controllers', 'htApp.services']);


angular.module('htApp').config(function($stateProvider) {
    $stateProvider.state('profiles', { // state for showing all profiles
        url: '/profiles',
        templateUrl: 'templates/profiles.html',
        controller: 'ProfileListController'
    }).state('viewProfile', { //state for showing single profile
        url: '/profiles/:id/view',
        templateUrl: 'templates/profile-view.html',
        controller: 'ProfileViewController'
    }).state('newProfile', { //state for adding a new profile
        url: '/profiles/new',
        templateUrl: 'templates/profile-add.html',
        controller: 'ProfileCreateController'
    }).state('editProfile', { //state for updating a profile
        url: '/profiles/:id/edit',
        templateUrl: 'templates/profile-edit.html',
        controller: 'ProfileEditController'
    });
}).run(function($state) {
    $state.go('profiles'); //make a transition to profile state when app starts
});

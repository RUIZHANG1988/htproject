/**
 * Created by RUI on 10/16/2016.
 */
angular.module('htApp.controllers', []).controller('ProfileListController', function($scope, $state, popupService, $window, Profile) {
    $scope.profiles = Profile.query(); //fetch all profiles. Issues a GET to /api/profiles

    $scope.deleteProfile = function(profile) { // Delete a profile. Issues a DELETE to /api/profiles/:id
        if (popupService.showPopup('Really delete this?')) {
            profile.$delete(function() {
                $window.location.href = ''; //redirect to home
            });
        }
    };
})
.controller('ProfileViewController', function($scope, $stateParams, Profile) {
    $scope.profile = Profile.get({
        id: $stateParams.id
    }); //Get a single profile.Issues a GET to /api/profiles/:id
})
.controller('ProfileCreateController', function($scope, $state, $stateParams, Profile) {
    $scope.profile = new Profile(); //create new profile instance. Properties will be set via ng-model on UI

    $scope.addProfile = function() { //create a new profile. Issues a POST to /api/profiles
        $scope.profile.$save(function() {
            $state.go('profiles'); // on success go back to home i.e. profiles state.
        });
    };
})
.controller('ProfileEditController', function($scope, $state, $stateParams, Profile) {
    $scope.updateProfile = function() { //Update the edited profile. Issues a PUT to /api/profiles/:id
        $scope.profile.$update(function() {
            $state.go('profiles'); // on success go back to home i.e. profiles state.
        });
    };

    $scope.loadProfile = function() { //Issues a GET request to /api/profiles/:id to get a profile to update
        $scope.profile = profile.get({
            id: $stateParams.id
        });
    };

    $scope.loadProfile(); // Load a profile which can be edited on UI
});

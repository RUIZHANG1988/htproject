/**
 * Created by RUI on 10/16/2016.
 */

angular.module('htApp.services',[]);

angular.module('htApp.services').factory('Profile', function($resource) {
    return $resource('http://dev.houseteddy.com/api/userprofiles/:id/?format=json', {
        id: '@_id'
    }, {
        update: {
            method: 'PUT' // this method issues a PUT request
        }
    }, {
        stripTrailingSlashes: false
    });
});

angular.module( 'ngBoilerplate.events', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'whichmango.services'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'events', {
    url: '/events',
    views: {
      "main": {
        controller: 'EventsCtrl',
        templateUrl: 'events/events.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'EventsCtrl', function EventsCtrl( $scope, Events ) {
  // This is simple a demo for UI Boostrap.
  $scope.events = Events.all();
})

;

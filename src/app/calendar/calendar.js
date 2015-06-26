angular.module( 'ngBoilerplate.calendar', [
  'ui.router',
  'placeholders',
  'ui.bootstrap',
  'whichmango.services',
  'angular.filter'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'calendar', {
    url: '/calendar',
    views: {
      "main": {
        controller: 'CalendarCtrl',
        templateUrl: 'calendar/calendar.tpl.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'CalendarCtrl', function CalendarCtrl( $scope, Events ) {
  // This is simple a demo for UI Boostrap.
  $scope.events = Events.getCalendar();
})

;

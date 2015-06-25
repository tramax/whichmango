angular.module( 'ngBoilerplate.calendar', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
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

.controller( 'CalendarCtrl', function CalendarCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;

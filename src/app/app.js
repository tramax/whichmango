angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.events',
  'ngBoilerplate.calendar',
  'ui.router',
  'whichmango.services',
  'bardo.directives'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location, Groups ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });

  $scope.groups = Groups.all().filter(function(item){
    return item.joined === true;
  });

  $scope.otherGroups = Groups.all().filter(function(item){
    return item.joined === false;
  });

})

;


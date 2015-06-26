/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
  'ui.router',
  'plusOne',
  'whichmango.services',
  'bardo.directives'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  })
  .state( 'group', {
    url: '/home/:groupId',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/group.tpl.html'
      }
    },
    data:{ pageTitle: 'Group' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller( 'HomeCtrl', function HomeController( $scope, $stateParams, $modal, Groups ) {

  $scope.activeGroup = Groups.get($stateParams.groupId);

  $scope.answer = {};
  $scope.answer.yes = false;
  $scope.answer.no = false;
  $scope.answer.maybe = false;

  $scope.slickConfig = {
      dots: false,
      autoplay: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow:'<button type="button" class="btn slick-prev">Previous</button>',
      nextArrow:'<button type="button" class="btn slick-next">Next</button>'
  };

  $scope.slickHandle = {
  };

  $scope.media = Groups.getEvents($stateParams.groupId);
  $scope.activeEvent = $scope.media[0];
  updateAnswer();

  $scope.onDirectiveInit = function() {
    
  };

  // On before slide change
  $('slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    console.log(nextSlide);
    $scope.$apply(function(){
      // perform any model changes or method invocations here on angular app.
      $scope.activeEvent = $scope.media[nextSlide];
      updateAnswer();
    });
  });

  $scope.setAnswer = function(answer) {
    $scope.activeEvent.question.answer = answer;
    updateAnswer();
  };

  function updateAnswer() {
    $scope.answer.yes = false;
    $scope.answer.no = false;
    $scope.answer.maybe = false;
    switch ($scope.activeEvent.question.answer) {
      case 1:
        $scope.answer.yes = true;
        break;
      case 2:
        $scope.answer.maybe = true;
        break;
      case 3:
        $scope.answer.no = true;
        break;
      default:
        break;
    }
  }

  $scope.openCreateEventModal = function (size) {

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'modalNewEvent.html',
      controller: 'ModalNewEventInstanceCtrl',
      size: size,
      resolve: {
      }
    });
  };

  $scope.openCommentsModal = function (size) {

    var modalInstance = $modal.open({
      animation: true,
      templateUrl: 'modalComments.html',
      controller: 'ModalCommentsInstanceCtrl',
      windowClass: 'modal-comments'
    });
  };

})

.controller('ModalNewEventInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

})

.controller('ModalCommentsInstanceCtrl', function ($scope, $modalInstance) {

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

})

;

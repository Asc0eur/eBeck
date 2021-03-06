angular.module('starter.controllers', [])

.controller('MenuCtrl', function($scope) {})

.controller('EventsCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();
  $scope.remove = function(event) {
    Events.remove(event);
  };
})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

//AJOUT

.controller('EventAddCtrl', function($scope, Events, $location){
    $scope.event = {};
    $scope.create = function() {
      console.log($scope.event);
      Events.create($scope.event);
      $location.path('/tab/events');
    }

})

.controller('StatsCtrl', function($scope){})
.controller('ParamCtrl', function($scope){
  $scope.toggleModel = {
    rotation : true
  };
})

.controller('HelpCtrl', function($scope, Helps){
  $scope.helps = Helps.all();
  $scope.remove = function(help) {
    Helps.remove(help);
  };
})

.controller('HelpDetailCtrl', function($scope, $stateParams, Helps) {
  $scope.help = Helps.get($stateParams.helpId);
});
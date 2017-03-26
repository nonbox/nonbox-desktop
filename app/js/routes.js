app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
  .state('main', {
    url:'/',
    templateUrl: 'app/views/main.html',
    controller: 'MainCtrl'
  })
  // catchall route
  $urlRouterProvider.otherwise('/');
});

app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $stateProvider
  .state('main', {
    url:'/',
    templateUrl: 'app/views/main.html',
    controller: 'MainCtrl'
  })
  .state('devices', {
    url:'/devices',
    templateUrl: 'app/views/devices.html',
    controller: 'DevicesCtrl'
  })
  .state('networks', {
    url:'/networks',
    templateUrl: 'app/views/networks.html',
    controller: 'NetworksCtrl'
  })
  .state('quickstart', {
    url:'/quickstart',
    template: 'app/views/devices.html'
  })
  .state('tutorials', {
    url:'/tutorials',
    template: 'app/views/devices.html'
  })
  .state('support', {
    url:'/support',
    template: 'app/views/devices.html'
  })
  .state('bugs', {
    url:'/bugs',
    template: 'app/views/devices.html'
  })
  .state('suggestions', {
    url:'/suggestions',
    template: 'app/views/devices.html'
  })
  .state('pr', {
    url:'/pr',
    template: 'app/views/devices.html'
  });
  // catchall route
  $urlRouterProvider.otherwise('/');
});

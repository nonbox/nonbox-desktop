angular.module('app', ['nonbox-client', 'angular-electron']);

const app = angular.module('app');

app.run(function($rootScope, $state, Wifi, shell, remote){
  // assume nonbox isn't connected until known otherwise
  $rootScope.nbConnected = false;

  // nonbox router and api endpoints
  $rootScope.nbServer = 'http://192.168.42.1:8080/'
  $rootScope.nbApi    = 'https://nonbox.co/'

  // insternal state reference (via ng-click)
  $rootScope.sref = $state.go.bind($state);

  // external link references (open in browser)
  $rootScope.exref = function(url){
    shell.openExternal(url)
  }
  // manipulate current eletron window
  $rootScope.currentWindow = function(action){
    remote.getCurrentWindow()[action]();
  }
});

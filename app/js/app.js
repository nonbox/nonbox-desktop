angular.module('app', ['nonbox-client', 'angular-electron']);

const app = angular.module('app');
const templateDir = 'app/views';

app.run(function($rootScope, $state, Wifi, shell, remote){
    // internal state reference (via ng-click)
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

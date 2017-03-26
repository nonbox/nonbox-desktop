angular.module('app', ['ui.router']);

const app = angular.module('app');

app.run(function($rootScope){
  console.log('nonbox app running')
});

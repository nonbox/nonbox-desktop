app.service('Wifi', function($rootScope, $http){
  return {
    scan: function(){
      return $http.get($rootScope.nbServer+'scan').then(function(resp){
        return resp;
      }).catch(function(err){
        return err;
      });
    },
    connect: function(ap){
      return $http.post($rootScope.nbServer+'connect', {ap:ap})
      .then(function(resp){
        return resp;
      }).catch(function(err){
        return err;
      });
    },
    status: function(){
      return $http.get($rootScope.nbServer+'status').then(function(resp){
        return resp;
      }).catch(function(err){
        return err;
      });
    }
  }
})

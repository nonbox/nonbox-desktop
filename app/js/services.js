app.service('Nonbox', function($rootScope, $http){
  return {
    check: function(){
      return $http.get($rootScope.nbServer).then(function(resp){
        if(resp.status === 200 && resp.data === 'nonbox server'){
          return true;
        } else { return false; }
      }).catch(function(err){
        return false;
      });
    },
    info: function(){
      return $http.post($rootScope.nbServer+'info')
      .then(function(resp){
        return resp;
      }).catch(function(err){
        return err;
      });
    }
  }
})

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
        $rootScope.online = resp.data.success;
        return resp.data;
      }).catch(function(err){
        $rootScope.online = false;
        return err;
      });
    }
  }
})

app.service('Report', function($rootScope, $http){
  return {
    submit: function(body, path){
      return $http.post($rootScope.nbApi+'report/'+path, body)
      .then(function(resp){ return resp;}, function (err) {
        return err;
      }).catch(function(err){
        return err;
      });
    }
  }
})

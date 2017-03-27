app.controller('MainCtrl', function($scope) {
  $scope.header = 'nonbox'
});

app.controller('DevicesCtrl', function($scope, $rootScope, Wifi) {
  $scope.devices = [];

  // scan/return networks with 'non' ssid
  Wifi.scan().then(function(resp){
    if(resp.data.success == true) {
      $scope.devices = resp.data.networks.filter(function(device){
        return device.ssid === 'non';
      });
    } else {
      $scope.error = resp.data.msg;
    }
  });

  // connect device
  $scope.connect = function(device){
    // pair device, etc etc, and set as current device
    $rootScope.currentDevice = device;
  }
});

app.controller('NetworksCtrl', function($scope, Wifi) {
  $scope.connectSecure = false;
  $scope.currentAp = {};
  $scope.networks = [];
  $scope.error = '';
  $scope.status = '';

  // scan/return networks except 'non' ssid
  Wifi.scan().then(function(resp){
    if(resp.data.success == true) {
      $scope.networks = resp.data.networks.filter(function(network){
        return network.ssid !== 'non';
      });
    } else {
      $scope.error = resp.data.msg;
    }
  });
  $scope.connect = function(ap){
    $scope.currentAp = ap;
    if(!ap.security){
      Wifi.connect(ap).then(function(resp){
        $scope.connecting = true;
      });
    } else {
      document.getElementById('passwordDialog').showModal();
    }
  }
  $scope.secureConnect = function(ap){
    Wifi.connect(ap).then(function(resp){
      document.getElementById('passwordDialog').close();
      $scope.connecting = true;
      delete $scope.currentAp.password;
    });
  }
  $scope.cancelConnect = function(el){
    document.getElementById('passwordDialog').close();
  }
  // get current connectivity status
  Wifi.status().then(function(resp){
    $scope.status = resp;
  })
  // color strength based on signal
  $scope.colorStrength = function(value){
    var strength;
    if(value > 80){
      strength = value * .01;
    } else {
      strength = (value - 15) * .01;
    }
    return 'rgba(253,188,64,'+ strength +')';
  }
});

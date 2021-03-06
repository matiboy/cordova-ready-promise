angular.module('cordovaReadyPromise', ['ng'])
  .factory('CordovaReady', ['$q', '$rootScope', function($q, $rootScope) {
    var q = $q.defer();
    document.addEventListener('deviceready', function() {
      q.resolve();
      try {
        $rootScope.$digest();
      }catch(e){}
    });
    return q.promise;
  }]);

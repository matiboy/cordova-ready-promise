# cordova-ready-promise

Angular service that provides a promise object which resolves when Cordova's `deviceready` is triggered.
If Angular is not being used, an ES6 Promise object is set on `window.CordovaReady` instead.

## Why?
'Cause promises are awesome, part of ES6 etc. And `deviceready` actually behaves like a promise: single occurrence and callbacks added *after* are called immediately.

## Installation

```shell
bower install cordova-ready-promise
```

## Usage

- Add `cordovaReadyPromise` to your Angular module's dependencies
- Dependency inject `CordovaReady`
- Add your code in a `.then` callback

## Sample code

### Angular

```js
angular.module('SomeModule', ['cordovaReadyPromise'])
  .factory('INeedCordovaStuff', ['CordovaReady', function(CordovaReady) {
    return {
      registerGCM: function() {
        CordovaReady.then(function() {
          gcm.register();
        });
      }
    }
  }]
);
```

### Vanilla

```js
  window.CordovaReady.then(function() {
    console.log('Cordova is ready');
  });
```


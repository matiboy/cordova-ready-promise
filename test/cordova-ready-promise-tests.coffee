chai = require 'chai'
sinon = require 'sinon'

{Cordovaready-promise} = require '../src/cordova-ready-promise'

chai.should()

describe 'cordova-ready-promise', ->
  it 'should do something', ->
    true.should.equal true
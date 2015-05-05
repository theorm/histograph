/*
  
  Test resource MODEL
  ===
  commandline usage:
  
  mocha -g 'model:resource'

*/
'use strict';

var settings = require('../settings'),
    resource = require('../models/resource'),
    should  = require('should');
    
// todo: create a new resource, discover its content, then retrieve its representation
describe('model:resource ', function() {
  
  it('should get a correct representation of a resource in english', function (done) {
    resource.get(11160, 'en', function(err, res){
      if(err)
        throw err;
      should.equal(res.id, 11160)
      should.equal(res.annotations[0].language, 'en')
      should.equal(res.persons.length, 3)
      should.exist(res.props)
      done()
    })
  })
  it('should get a correct representation of a resource in french', function (done) {
    resource.get(11160, 'fr', function(err, res){
      if(err)
        throw err;
      should.equal(res.id, 11160)
      should.equal(res.annotations[0].language, 'fr')
      should.equal(res.persons.length, 3)
      should.exist(res.props)
      done()
    })
  })
  it('should get a NOT found error', function (done) {
    resource.get(111600000000, 'fr', function(err, res){
      should.exist(err)
      
      done()
    })
  })
 
});
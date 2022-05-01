/**
 * Jugugu密钥Fast模式
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Jugugufast);
  }
}(this, function(expect, Jugugufast) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jugugufast.InlineObject3();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineObject3', function() {
    it('should create an instance of InlineObject3', function() {
      // uncomment below and update the code to test InlineObject3
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be.a(Jugugufast.InlineObject3);
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property randomtoken (base name: "randomtoken")', function() {
      // uncomment below and update the code to test the property randomtoken
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

    it('should have the property openid (base name: "openid")', function() {
      // uncomment below and update the code to test the property openid
      //var instane = new Jugugufast.InlineObject3();
      //expect(instance).to.be();
    });

  });

}));
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

// CommonJS-like environments that support module.exports, like Node.
factory(require('expect.js'), require(process.cwd()+'/src/index'));

'use strict';

var instance;

beforeEach(function() {
  instance = new Jugugufast.DefaultApi();
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

describe('DefaultApi', function() {
    describe('juguguFastGetNFTPost', function() {
      it('should call juguguFastGetNFTPost successfully', function(done) {
        //uncomment below and update the code to test juguguFastGetNFTPost
        //instance.juguguFastGetNFTPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('juguguFastLoginPost', function() {
      it('should call juguguFastLoginPost successfully', function(done) {
        //uncomment below and update the code to test juguguFastLoginPost
        //instance.juguguFastLoginPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('juguguFastRegPost', function() {
      it('should call juguguFastRegPost successfully', function(done) {
        //uncomment below and update the code to test juguguFastRegPost
        //instance.juguguFastRegPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('juguguFastSignTxPost', function() {
      it('should call juguguFastSignTxPost successfully', function(done) {
        //uncomment below and update the code to test juguguFastSignTxPost
        //instance.juguguFastSignTxPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
});
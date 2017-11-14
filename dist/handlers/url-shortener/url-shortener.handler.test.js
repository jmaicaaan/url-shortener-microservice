'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');
var urlService = require('../../services/url.service').UrlService;

describe('url-shortener', function () {
  describe('#server', function () {
    afterEach(function () {
      app.close();
    });
    it('should be able to access root /', function (done) {
      server(app).get('/').expect(200, done);
    });
    it('should be able to add valid url', function (done) {
      var url = 'https://www.github.com/jmaicaaan';
      server(app).get('/url').query({ url: url }).expect(200).end(function (err, res) {
        assert.equal(res.body.url, url);
        done(err);
      });
    });
    it('should not be able to add invalid url', function (done) {
      var url = 'www.invalid-url.com';
      server(app).get('/url').query({ url: url }).expect(500, done);
    });
    it('should be able to retrieve with given id', function (done) {
      server(app).get('/url/1').expect(302).end(function (err, res) {
        assert.equal(res.headers.hasOwnProperty('location'), true);
        done(err);
      });
    });
  });
});
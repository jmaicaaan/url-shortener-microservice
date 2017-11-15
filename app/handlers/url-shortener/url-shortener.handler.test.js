const assert = require('assert');
const app = require('../../../dist/index');
const server = require('supertest');
const urlService = require('../../services/url.service').UrlService;

describe('url-shortener', () => {
  describe('#server', () => {
    afterEach(() => {
      app.close();
    });
    it('should be able to access root /', done => {
      server(app)
        .get('/')
        .expect(200, done);
    });
    it('should be able to add valid url', done => {
      let url = 'https://www.github.com/jmaicaaan';
      server(app)
        .get('/url')
        .query({ url: url })
        .expect(200)
        .end((err, res) => {
          assert.equal(res.body.url, url);
          done(err);
        });
    }).timeout(15000);
    it('should not be able to add invalid url', done => {
      let url = 'www.invalid-url.com';
      server(app)
        .get('/url')
        .query({ url: url })
        .expect(500, done);
    }).timeout(15000);
    it('should be able to retrieve with given id', done => {
      server(app)
        .get('/url/1')
        .expect(302)
        .end((err, res) => {
          assert.equal(res.headers.hasOwnProperty('location'), true);
          done(err);
        });
    }).timeout(15000);
  });
});
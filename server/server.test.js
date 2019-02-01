const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

describe('server', () => {
  describe('GET /', () => {
    it('should return Hello world!!!', (done) => {
      request(app)
      .get('/')
    //  .expect('Hello world!!!')
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found'
      });
    })
      .expect(404)
      .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return an array of objects', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body[0]).toInclude({
          name: 'shipra',
          age: 28
        });
      })
      .end(done);
    });
  });
  });

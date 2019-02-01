//expect is used to test sync/ async node code
//expect makes the use of it to create test cases and in the same way we have descibe() function. both comes from mocha
// supertest is used to test express application

const utils = require('./utils.js');
const expect = require('expect');

describe('Utils', () => {

describe('#add', () => {
  it('should add two numbers', () => {
    var res = utils.add(10,10);
    // if(res !== 20) {
    //   throw new Error(`expected 20, but got ${res}`);
    // }
  expect(res).toBe(20).toBeA('number');
  });

  it('should async add two numbers', (done) => {
    utils.asyncAdd(1, 2, (sum) => {
      expect(sum).toBe(3).toBeA('number');
      done();
    });
  });

});

describe('#square', () => {
  it('should square a number', () => {
    var result = utils.square(5);
    expect(result).toBe(25).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(5, (sq) => {
      expect(sq).toBe(25).toBeA('number');
      done();
    });
  });
});
});


it('should verify first and last names are set', () => {
  var user = {location: 'Philadelphia', age: 28};
  var res = utils.setName(user, 'shipra valecha');
  expect(res).toInclude({
    firstName: 'shipra',
    lastName: 'valecha'
  });

});

// it('should expect some values', () => {
//   //expect(12).toBe(12);
//   //expect({name: 'shipra'}).toEqual({name: 'shipra'});
//   //expect({name: 'Shipra'}).toNotEqual({name: 'shipra'});
//   //expect([1,2,3,4]).toInclude(4);
//   expect({name: 'shipra', age: 28}).toInclude({age: 28});
// });

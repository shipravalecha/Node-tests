// spies comes with expect
// to get to the expect doc, search for mjackson expect
// spy is a fn that is used to check if the spy fn is called i.e fn that is tested is calling another fn.
// in this eg, spy fn is saveUser in db.js which is being called from app.js
//rewire is used to swap out names of original fn with spy fn

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
  var db = {
      saveUser: expect.createSpy()
  };
app.__set__('db', db);

  it('should call the spy correctly', () => {
var spy = expect.createSpy();
spy('Shipra', 28);
//expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledWith('Shipra', 28);
  });

  it('should call saveUser function', () => {
    var email = 'shipra@gmail.com';
    var password = 'ship123';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  })
});

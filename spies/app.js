var db = require('./db.js');
module.exports.handleSignup = (email, password) => {
  // check if email exists
  // save the user to database
  db.saveUser({
    email,
    password
  });
  // send the welcome email
}

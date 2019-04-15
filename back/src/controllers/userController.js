const login = require('./athentication/login.js');
const signup = require('./athentication/signup.js');

module.exports = function (app) {
    app.post('/login',login);
    app.post('/signup',signup);
}
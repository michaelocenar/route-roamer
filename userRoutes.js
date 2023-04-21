const userRoutes = require('next-routes')();

userRoutes
  .add('index', '/')
  .add('users', '/users')
  .add('user', '/users/:id');

module.exports = userRoutes;




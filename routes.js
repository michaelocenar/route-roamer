const routes = require('next-routes')();

routes
  .add('index', '/')
  .add('users', '/users')
  .add('user', '/users/:id');

module.exports = routes;

// const routes = require('next-routes')();

// routes
//   .add('index', '/')
//   .add('itineraryActivities', '/itineraryActivities');

// module.exports = routes;





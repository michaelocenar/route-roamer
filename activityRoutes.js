const activityRoutes = require('next-routes')();

activityRoutes
  .add('index', '/')
  .add('itineraryActivities', '/itineraryActivities');

module.exports = activityRoutes;






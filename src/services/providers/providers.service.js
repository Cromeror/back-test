// Initializes the `providers` service on path `/providers`
const createService = require('feathers-mongodb');
const hooks = require('./providers.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/providers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('providers');

  mongoClient.then(db => {
    service.Model = db.collection('providers');
  });

  service.hooks(hooks);
};

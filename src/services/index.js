const providers = require('./providers/providers.service.js');
module.exports = function (app) {
  app.configure(providers);
};

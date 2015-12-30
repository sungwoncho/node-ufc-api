var _ = require('lodash');

var Client = module.exports = function(config) {
  if (! config) {
    config = {};
  }

  this.version = config.version || '1';

  this._apiSetup();
};

Client.prototype._apiSetup = function() {
  var api = require('./v' + this.version + '/api.js');

  // Extend the Client object with the api methods
  _.assign(this, api);
};

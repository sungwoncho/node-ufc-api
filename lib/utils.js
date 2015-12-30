var request = require('request');

module.exports = {
  sendRequest(method, uri, params, done) {
    var options = {
      method: method,
      uri: uri,
      json: true
    };

    // Default argument for params
    if (typeof params === 'function') {
      done = params;
      params = {};
    }

    if (params) {
      options.qs = params;
    }

    request(options, (err, res) => {
      if (err) {
        return done(err);
      }

      done(null, res);
    });
  }
};

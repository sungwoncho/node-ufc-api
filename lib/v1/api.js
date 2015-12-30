var sendRequest = require('../utils').sendRequest;

const ENDPOINT = 'http://ufc-data-api.ufc.com/api/v1/us/';

function uriFor(path) {
  return ENDPOINT + path;
}

var api = {
  health(done) {
    sendRequest('GET', uriFor('health'), done);
  },

  news(done) {
    sendRequest('GET', uriFor('news'), done);
  },

  article(id, done) {
    sendRequest('GET', `${uriFor('news')}/${id}`, done);
  },

  media(done) {
    sendRequest('GET', uriFor('media'), done);
  },

  mediaItem(id, done) {
    sendRequest('GET', `${uriFor('media')}/${id}`, done);
  },

  titleHolders(done) {
    sendRequest('GET', uriFor('fighters/title_holders'), done);
  },

  fighters(done) {
    sendRequest('GET', uriFor('fighters'), done);
  },

  fighter(id, done) {
    sendRequest('GET', `${uriFor('fighters')}/${id}`, done);
  },

  events(done) {
    sendRequest('GET', uriFor('events'), done);
  },

  event(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}`, done);
  },

  alerts(done) {
    sendRequest('GET', uriFor('alerts'), done);
  }
};

module.exports = api;

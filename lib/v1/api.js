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
    sendRequst('GET', `${uriFor('news')}/${id}`, done);
  },

  media(done) {
    sendRequst('GET', uriFor('media'), done);
  },

  mediaItem(id, done) {
    sendRequst('GET', `${uriFor('media')}/${id}`, done);
  },

  titleHolders(done) {
    sendRequst('GET', uriFor('fighters/title_holders'), done);
  },

  fighters(done) {
    sendRequst('GET', uriFor('fighters'), done);
  },

  fighter(id, done) {
    sendRequst('GET', `${uriFor('fighters')}/${id}`, done);
  },

  events(done) {
    sendRequst('GET', uriFor('events'), done);
  },

  event(id, done) {
    sendRequst('GET', `${uriFor('events')}/${id}`, done);
  },

  alerts(done) {
    sendRequst('GET', uriFor('alerts'), done);
  }
};

module.exports = api;

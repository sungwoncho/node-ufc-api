var sendRequest = require('../utils').sendRequest; 

const ENDPOINT = 'http://ufc-data-api.ufc.com/api/v3/iphone/'; 

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
  
  fighterNews(id, done) {
    sendRequest('GET', `${uriFor('fighters')}/${id}/news`, done);
  },
  
  fighterMedia(id, done) {
    sendRequest('GET', `${uriFor('fighters')}/${id}/media`, done);
  },

  events(done) {
    sendRequest('GET', uriFor('events'), done);
  },

  event(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}`, done);
  },
  
  eventFights(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/fights`, done);
  },
  
  eventMedia(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/media`, done);
  },

  alerts(done) {
    sendRequest('GET', uriFor('alerts'), done);
  }
};

module.exports = api;

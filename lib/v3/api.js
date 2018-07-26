var sendRequest = require('../utils').sendRequest; 

const ENDPOINT = 'http://ufc-data-api.ufc.com/api/v3/us/'; 

function uriFor(path) { 
	return ENDPOINT + path;
}

var api = {
  health(done) {
    sendRequest('GET', uriFor('health'), done);
  },

  translations(id, done) {
    sendRequest('GET', `${uriFor('translations')}/${id}`, done);
  },

  streamingVideo(done) {
    sendRequest('GET', uriFor('live'), done);
  },

  liveContent(done) {
    sendRequest('GET', uriFor('live_content'), done);
  },

  chat(done) {
    sendRequest('GET', uriFor('chat'), done);
  },

  instructions(done) {
    sendRequest('GET', uriFor('instructions'), done);
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
    sendRequest('GET', `${uriFor('fighters')}/${id}.json`, done);
  },

  fighterStatsFilterKeyValues(done) {
    sendRequest('GET', uriFor('fighters/stats_filter_key_values'), done);
  },

  fighterStatsByWeightClass(id, done) {
    sendRequest('GET', `${uriFor('fighters/stats/weight_class')}/${id}`, done);
  },

  fighterStatsByBirthCountry(id, done) {
    sendRequest('GET', `${uriFor('fighters/stats/born_country')}/${id}`, done);
  },  
  
  fighterNews(id, done) {
    sendRequest('GET', `${uriFor('fighters')}/${id}/news`, done);
  },
  
  fighterMedia(id, done) {
    sendRequest('GET', `${uriFor('fighters')}/${id}/media`, done);
  },

  octagonGirls(done) {
    sendRequest('GET', uriFor('octagon_girls'), done);
  },

  octagonGirl(id, done) {
    sendRequest('GET', `${uriFor('octagon_girls')}/${id}`, done);
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

  eventHighlights(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/highlights`, done);
  },

  fightVotes(id, done) {
    sendRequest('GET', `${uriFor('fights')}/${id}/votes`, done);
  },

  fightGetVote(fightId, roundNum, fighterStatId, clientId, done) {
    sendRequest(
      'GET', 
      `${uriFor('fights')}/${fightId}/round/${roundNum}/fighter/${fighterStatId}/vote/${clientId}`,
      done
    );
  },

  fightPostVote(id, done) {
    sendRequest('POST', `${uriFor('fights')}/${id}/vote`, done);
  },

  roundScoring(id, done) {
    sendRequest('GET', `${uriFor('events/round_scoring')}/${id}`, done);
  },

  discussEvent(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/discuss`, done);
  },

  eventTickets(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/tickets`, done);
  },

  watchEvent(id, done) {
    sendRequest('GET', `${uriFor('events')}/${id}/watch`, done);
  },

  alerts(done) {
    sendRequest('GET', uriFor('alerts'), done);
  }
};

module.exports = api;

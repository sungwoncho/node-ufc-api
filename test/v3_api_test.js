var expect = require('chai').expect;
var nock = require('nock');

var api = require('../dist/v3/api');

describe("v3 api", function() {
  describe("health", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/health')
        .reply(200);

      api.health(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("translations", function() {
    it("is successful", function(done) {
      var translationId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/translations/' + translationId)
        .reply(200);

      api.translations(translationId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("streamingVideo", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/live')
        .reply(200);

      api.streamingVideo(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("liveContent", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/live_content')
        .reply(200);

      api.liveContent(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("chat", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/chat')
        .reply(200);

      api.chat(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("instructions", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/instructions')
        .reply(200);

      api.instructions(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("news", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/news')
        .reply(200);

      api.news(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("article", function() {
    it("is successful", function(done) {
      var articleId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/news/' + articleId)
        .reply(200);

      api.article(articleId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("media", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/media')
        .reply(200);

      api.media(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("mediaItem", function() {
    it("is successful", function(done) {
      var mediaItemId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/media/' + mediaItemId)
        .reply(200);

      api.mediaItem(mediaItemId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("titleHolders", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/title_holders')
        .reply(200);

      api.titleHolders(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighters", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters')
        .reply(200);

      api.fighters(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighter", function() {
    it("is successful", function(done) {
      var fighterId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/' + fighterId)
        .reply(200);

      api.fighter(fighterId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterStatsFilterKeyValues", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/stats_filter_key_values')
        .reply(200);

      api.fighterStatsFilterKeyValues(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterStatsByWeightClass", function() {
    it("is successful", function(done) {
      var weightClassId = "hw";

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/stats/weight_class/' + weightClassId)
        .reply(200);

      api.fighterStatsByWeightClass(weightClassId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterStatsByBirthCountry", function() {
    it("is successful", function(done) {
      var birthCountryId = "usa";

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/stats/born_country/' + birthCountryId)
        .reply(200);

      api.fighterStatsByBirthCountry(birthCountryId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterNews", function() {
    it("is successful", function(done) {
      var fighterId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/' + fighterId + '/news')
        .reply(200);

      api.fighterNews(fighterId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterMedia", function() {
    it("is successful", function(done) {
      var fighterId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fighters/' + fighterId + '/media')
        .reply(200);

      api.fighterMedia(fighterId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("octagonGirls", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/octagon_girls')
        .reply(200);

      api.octagonGirls(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("octagonGirl", function() {
    it("is successful", function(done) {
      var octagonGirlId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/octagon_girls/' + octagonGirlId)
        .reply(200);

      api.octagonGirl(octagonGirlId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("events", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events')
        .reply(200);

      api.events(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("event", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId)
        .reply(200);

      api.event(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("eventFights", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/fights')
        .reply(200);

      api.eventFights(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("eventMedia", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/media')
        .reply(200);

      api.eventMedia(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("eventHighlights", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/highlights')
        .reply(200);

      api.eventHighlights(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fightVotes", function() {
    it("is successful", function(done) {
      var fightId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/fights/' + fightId + '/votes')
        .reply(200);

      api.fightVotes(fightId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fightGetVote", function() {
    it("is successful", function(done) {
      var fightId = 1;
      var roundNum = 1;
      var fighterStatId = 1;
      var clientId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get(
          '/fights/' + fightId + 
          '/round/' + roundNum +
          '/fighter/' + fighterStatId +
          '/vote/' + clientId
          )
        .reply(200);

      api.fightGetVote(fightId, roundNum, fighterStatId, clientId, 
        function (err, res) {
          expect(res.statusCode).to.equal(200);
          done();
      });
    });
  });

  describe("fightPostVote", function() {
    it("is successful", function(done) {
      var fightId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .post('/fights/' + fightId + '/vote')
        .reply(200);

      api.fightPostVote(fightId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("roundScoring", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/round_scoring/' + eventId)
        .reply(200);

      api.roundScoring(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("discussEvent", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/discuss')
        .reply(200);

      api.discussEvent(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("eventTickets", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/tickets')
        .reply(200);

      api.eventTickets(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("watchEvent", function() {
    it("is successful", function(done) {
      var eventId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/events/' + eventId + '/watch')
        .reply(200);

      api.watchEvent(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("alerts", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/us')
        .get('/alerts')
        .reply(200);

      api.alerts(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});

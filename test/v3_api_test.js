var expect = require('chai').expect;
var nock = require('nock');

var api = require('../dist/v3/api');

describe("v3 api", function() {
  describe("health", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
        .get('/health')
        .reply(200);

      api.health(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("news", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
        .get('/fighters/' + fighterId)
        .reply(200);

      api.fighter(fighterId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("fighterNews", function() {
    it("is successful", function(done) {
      var fighterId = 1;

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
        .get('/fighters/' + fighterId + '/media')
        .reply(200);

      api.fighterMedia(fighterId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("events", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
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

      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
        .get('/events/' + eventId + '/media')
        .reply(200);

      api.eventMedia(eventId, function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  describe("alerts", function() {
    it("is successful", function(done) {
      nock('http://ufc-data-api.ufc.com/api/v3/iphone')
        .get('/alerts')
        .reply(200);

      api.alerts(function (err, res) {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });
});

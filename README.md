# node-ufc-api [![Build Status](https://travis-ci.org/sungwoncho/node-ufc-api.svg?branch=master)](https://travis-ci.org/sungwoncho/node-ufc-api)

A node.js wrapper for the official API of the Ultimate Fighting Championship.

## Install

    npm install ufc-api --save

## Usage

```js
var UfcAPI = require('ufc-api');

var ufc = new UfcAPI({
  version: 'v3'
});

ufc.titleHolders(function(err, res) {
  console.log(res.body);
  // =>
  // [
  //   {
  //     id: 1160,
  //     wins: 13,
  //     statid: 1494,
  //     losses: 4,
  //     last_name: "Jung",
  //     weight_class: "Featherweight",
  //     title_holder: true,
  //     draws: 0,
  //     first_name: "Chan Sung",
  //     fighter_status: "Active",
  //     thumbnail: "..."
  //   },
  //   ...
  // ]
});
```

## Choosing API version

When instantiating an API client, you can specify the API version by passing
an option. The version defaults to `v3`.

```
var UfcAPI = require('ufc-api');

var ufc = new UfcAPI({
  version: 'v3'
});
```

## Upgrading to 0.2.0

The default API version has been changed from `v1` to `v3`. There should not
be any breaking changes, and no action is required.

## API methods

The module supports `v1` and `v3` API.

To see all the endpoints:

* http://ufc-data-api.ufc.com/api/v1/us/
* http://ufc-data-api.ufc.com/api/v3/us/

*All callbacks take `error` as the first argument, and `result` as the second.*

### v1

#### health(callback)
#### news(callback)
#### article(id, callback)
#### media(callback)
#### mediaItem(id, callback)
#### titleHolders(callback)
#### fighters(callback)
#### fighter(id, callback)
#### events(callback)
#### event(id, callback)
#### alerts(callback)


### v3

#### health (callback)
#### translations (id, callback)
#### streamingVideo (callback)
#### liveContent (callback)
#### chat (callback)
#### instructions (callback)
#### news (callback)
#### article (id, callback)
#### media (callback)
#### mediaItem (id, callback)
#### titleHolders (callback)
#### fighters (callback)
#### fighter (id, callback)
#### fighterStatsFilterKeyValues (callback)
#### fighterStatsByWeightClass (id, callback)
#### fighterStatsByBirthCountry (id, callback)
#### fighterNews (id, callback)
#### fighterMedia (id, callback)
#### octagonGirls (callback)
#### octagonGirl (id, callback)
#### events (callback)
#### event (id, callback)
#### eventFights (id, callback)
#### eventMedia (id, callback)
#### eventHighlights (id, callback)
#### fightVotes (id, callback)
#### fightGetVote (fightId, roundNum, fighterStatId, clientId, callback)
#### fightPostVote (id, callback)
#### roundScoring (id, callback)
#### discussEvent (id, callback)
#### eventTickets (id, callback)
#### watchEvent (id, callback)
#### alerts (callback)


## Contributing

* This module uses babel to compile ES2015 code in `/lib` to `/dist`. Simply
write code using ES2015 in `/lib`.
* The test is run against the compiled code in `/dist`. To run test, first run
`npm run-script compile`. And run `npm test`.
* Compilation is run automatically as a hook before publishing to npm.

## License

MIT

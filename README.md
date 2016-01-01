# node-ufc-api [![Build Status](https://travis-ci.org/sungwoncho/node-ufc-api.svg?branch=master)](https://travis-ci.org/sungwoncho/node-ufc-api)

A node.js wrapper for the official API of the Ultimate Fighting Championship.

## Install

    npm install ufc-api --save

## Usage

```js
var UfcAPI = require('ufc-api');

var ufc = new UfcAPI();

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

## API methods

Currently, this module supports `general_use (v1)` API. See
http://ufc-data-api.ufc.com/api/v1/us/ for all endpoints.

*All callbacks take `error` as the first argument, and `result` as the second.*

### health(callback)
### news(callback)
### article(id, callback)
### media(callback)
### mediaItem(id, callback)
### titleHolders(callback)
### fighters(callback)
### fighter(id, callback)
### events(callback)
### event(id, callback)
### alerts(callback)

## Contributing

* This module uses babel to compile ES2015 code in `/lib` to `/dist`. Simply
write code using ES2015 in `/lib`.
* The test is run against the compiled code in `/dist`. To run test, first run
`npm run-script compile`. And run `npm test`.
* Compilation is run automatically as a hook before publishing to npm.

## License

MIT

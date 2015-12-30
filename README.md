# node-ufc-api

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
  //     title_holder: false,
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

* This module uses babel to compile ES2015 code in `/lib` to `/dist`. You don't
need to worry about compiling because the compilation is run as a hook before
we publish the new version. Simply write code in `/lib` using ES2015.

## License

MIT

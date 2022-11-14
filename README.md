# fastify-cors-envregex

Helper utility to parse and expand regex usually passed in as environment variables
to services into a regex format supported by fastify.

```js
const CORS_ORIGINS =
  "http://localhost:*,https://localhost:*,https://*.adahide.io";

// would be converted into
const fce = require("@zoeldevapps/fastify-cors-envregex");

fce.expandAllowedOrigins(
  "http://localhost:*,https://localhost:*,https://*.adahide.io"
);
/*
{
  origin: [
    /^http:\/\/localhost:.*$/,
    /^https:\/\/localhost:.*$/,
    /^https:\/\/.*\.adahide.io$/
  ],
  methods: [ 'GET', 'PUT', 'POST', 'OPTIONS' ],
  credentials: true
}
*/
```

Usage:

```js
server.register(
  cors,
  getCorsOptions(CORS_ORIGINS, process.env.NODE_ENV !== "production")
);
```

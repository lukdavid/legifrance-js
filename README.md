# legifrance-js

A Javascript wrapper for Legifrance API

## Tests

Test run with [ts-jest](https://kulshekhar.github.io/ts-jest). They need Oauth credentials to access API. To run tests locally, first create a file

```js
// .jest/setEnvVars.js
process.env.CLIENT_ID = '';
process.env.CLIENT_SECRET = '';
```

and fill it with your Oauth credentials. You can then run tests with the command

```bash
npm run test
```

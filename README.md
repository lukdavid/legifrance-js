# legifrance-js

A Javascript wrapper for Legifrance API

## Aim

Providing an easy-to-use interface to Legifrance Database, with typed models.
For now I just implemented method that I needed but the API has much more endpoints (see its documentation).

## Getting started

First you need Oauth credentials for the API. To get them register on [PISTE](https://developer.aife.economie.gouv.fr/) and follow documentation.

Once you have credentials (`client_id` and `client_secret`), you can initialize and authenticate a client :

```ts
import LegifranceClient from 'legifrance-js';

const client = new LegifranceClient(clientId, clientSecret);
client.authenticate();
```

## Available methods

```ts
const ping = await client.consultPing(); // true | false : test API response

const juriText = await client.getJuritext('JURITEXT000045349899'); // get text from JURI database by textId

const article = await client.getarticle('LEGIARTI000006419295'); // get article by cid

const code = await client.getCode('LEGITEXT000006070721'); // get code by textId
```

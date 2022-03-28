/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance } from 'axios';

const OAUTH_URL = 'https://oauth.aife.economie.gouv.fr/api/oauth/token';
const BASE_URL = 'https://api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app';

class LegifranceClient {
  instance: AxiosInstance | undefined;

  private _clientId: string;

  private _clientSecret: string;

  constructor(clientId: string, clientSecret: string) {
    this.instance = undefined;
    this._clientId = clientId;
    this._clientSecret = clientSecret;
  }

  async authenticate() {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('scope', 'openid');
    params.append('client_id', process.env.CLIENT_ID as string);
    params.append('client_secret', process.env.CLIENT_SECRET as string);
    const response = await axios.post(OAUTH_URL as string, params);
    if (
      response.status === 200 &&
      typeof response.data.access_token === 'string'
    ) {
      // successfully authenticated
      this.instance = axios.create({
        baseURL: BASE_URL,
        timeout: 3600,
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });
      return true;
    }
    throw new Error(`Oauth authentication failed, received ${response}`);
  }
}

export default LegifranceClient;

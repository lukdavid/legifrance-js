/* eslint-disable no-underscore-dangle */
import axios, { AxiosInstance } from 'axios';
import {
  Article,
  ArticleVersionRaw,
  Code,
  CodeRaw,
  JuriText,
  JuriTextRaw,
} from './models';
import { dateConverters } from './utils/date';

const OAUTH_URL = 'https://oauth.aife.economie.gouv.fr/api/oauth/token';
const BASE_URL = 'https://api.piste.gouv.fr/dila/legifrance-beta/lf-engine-app';

class LegifranceClient {
  instance: AxiosInstance;

  private _clientId: string;

  private _clientSecret: string;

  constructor(clientId: string, clientSecret: string) {
    this.instance = axios.create();
    this._clientId = clientId;
    this._clientSecret = clientSecret;
  }

  async authenticate() {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('scope', 'openid');
    params.append('client_id', this._clientId);
    params.append('client_secret', this._clientSecret);
    const response = await axios.post(OAUTH_URL as string, params);
    if (
      response.status === 200 &&
      typeof response.data.access_token === 'string'
    ) {
      // successfully authenticated
      this.instance = axios.create({
        baseURL: BASE_URL,
        timeout: response.data.expires_in || 3600,
        headers: { Authorization: `Bearer ${response.data.access_token}` },
      });
      return true;
    }
    throw new Error(`Oauth authentication failed, received ${response}`);
  }

  async consultPing(): Promise<boolean> {
    const response = await this.instance.get('consult/ping');
    return response.status === 200;
  }

  async getJuritext(textId: string): Promise<JuriText> {
    const response = await this.instance.post('consult/juri', { textId });
    const raw = response.data as { text: JuriTextRaw };
    return new JuriText(raw.text);
  }

  async getArticle(cid: string): Promise<Article> {
    const response = await this.instance.post('consult/getArticleByCid', {
      cid,
    });
    const { listArticle } = response.data as {
      listArticle: ArticleVersionRaw[];
    };
    return new Article(cid, listArticle);
  }

  async getCode(
    textId: string,
    abrogated = false,
    date = new Date(),
  ): Promise<Code> {
    const response = await this.instance.post('consult/code/tableMatieres', {
      abrogated,
      textId,
      date: dateConverters.toRaw(date),
    });
    const raw = response.data as CodeRaw;
    return new Code(raw);
  }
}

export default LegifranceClient;

import LegifranceClient from '.';

const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;

describe('Oauth authentication', () => {
  it('Should successfully authenticate', async () => {
    const client = new LegifranceClient(CLIENT_ID, CLIENT_SECRET);
    const success = await client.authenticate();
    expect(success).toBeTruthy();
  });
});

describe('Consult methods', () => {
  const client = new LegifranceClient(CLIENT_ID, CLIENT_SECRET);

  beforeAll(async () => {
    await client.authenticate();
  });

  it('Should ping', async () => {
    const ping = await client.consultPing();
    expect(ping).toBeTruthy();
  });

  it('Should get JuriText', async () => {
    const juriText = await client.getJuritext('JURITEXT000045349899');
    const { dateTexte, juridiction, texteHtml, numeroAffaire, solution } =
      juriText;
    expect(texteHtml.length).toBeGreaterThan(200);
    expect(dateTexte.getDate()).toBe(10);
    expect(dateTexte.getMonth()).toBe(2);
    expect(dateTexte.getFullYear()).toBe(2022);
    expect(juridiction).toBe('Cour de cassation');
    expect(numeroAffaire).toStrictEqual(['19-23.496']);
    expect(solution).toBe('Cassation sans renvoi');
  });
});

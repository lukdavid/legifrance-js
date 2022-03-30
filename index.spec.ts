import LegifranceClient from '.';

const CLIENT_ID = process.env.CLIENT_ID as string;
const CLIENT_SECRET = process.env.CLIENT_SECRET as string;

const compareDates = (d1: Date, d2: Date): boolean =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

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

  it('Should get JuriText by id', async () => {
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

  it('Should get code article by cid', async () => {
    const requestedCid = 'LEGIARTI000006419295'; // 16-3 du Code civil
    const article = await client.getArticle(requestedCid);
    const { cid, num, versions } = article;
    expect(cid).toBe(requestedCid);
    expect(num).toBe('16-3');
    expect(versions.length).toBeGreaterThanOrEqual(3);
    const firstVersion = versions[versions.length - 1];
    expect(firstVersion.texteHtml.length).toBeGreaterThan(300);
    expect(firstVersion.context.titresTM[0].titre).toBe(
      'Livre Ier : Des personnes',
    );
    expect(
      firstVersion.lienModifications.map(({ textTitle }) => textTitle),
    ).toContain(
      'Loi n°94-653 du 29 juillet 1994 - art. 3 () JORF 30 juillet 1994',
    );
  });

  it('Should get code metadata and structure (table des matières)', async () => {
    const requestedCid = 'LEGITEXT000006070721';
    const code = await client.getCode(requestedCid); // code civil
    const { title, cid, modifDate, sections } = code;
    expect(title).toBe('Code civil');
    expect(cid).toBe(requestedCid);
    expect(modifDate.getTime()).toBeGreaterThan(new Date(2022, 0, 1).getTime());
    expect(sections.length).toBeGreaterThan(0);
    expect(sections[0].articles.length).toBeGreaterThan(0);
  });

  it('Should request code at specific date', async () => {
    const requestedCid = 'LEGITEXT000006070721';
    const { etat, dateDebutVersion, dateFinVersion, sections } =
      await client.getCode(requestedCid, false, new Date(2022, 0, 4)); // code civil on jan 4, 2022
    expect(etat).toBe('VIGUEUR');
    expect(compareDates(dateDebutVersion, new Date(2022, 0, 1))).toBeTruthy();
    expect(compareDates(dateFinVersion, new Date(2022, 0, 26))).toBeTruthy();
    expect(sections.length).toBe(7);
  });
});

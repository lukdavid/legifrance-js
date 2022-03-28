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

class LegifranceClient {
  token: string;

  constructor() {
    this.token = 'Hello world';
  }

  greet() {
    console.log(this.token);
  }
}

export default LegifranceClient;

export class RequestError extends Error {
  statusCode: number;

  constructor(message: string, code = 500) {
    super(message);

    if (code > 500 || code < 100) {
      this.statusCode = 500;
      return;
    }

    this.statusCode = code;
  }
}

import { GoogleSpreadsheet } from "google-spreadsheet";

const googleCredentials = {
  client_email: <string>process.env.GOOGLE_CLIENT_EMAIL,
  private_key: <string>process.env.GOOGLE_PRIVATE_KEY,
}

export class Spreadsheet {
  private readonly spreadsheets: GoogleSpreadsheet;
  
  constructor(sheetId: string) {
    this.spreadsheets = new GoogleSpreadsheet(sheetId)
    return this;
  }

  private async configure() {
    await this.spreadsheets.useServiceAccountAuth(googleCredentials);
  }

  async getClient() {
    await this.configure();
    await this.spreadsheets.loadInfo();
    return this.spreadsheets;
  }
}
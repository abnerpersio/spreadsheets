import { Spreadsheet } from '../../config/google';
import { RequestError } from '../errors/RequestError';
import { UseCase } from '../types';

type Message = {
  sheet: {
    id: string;
    title: string;
  };
  data: Record<string, string>;
};

export class UpdateSheetUseCase implements UseCase<Message> {
  async execute(message: Message) {
    const { data } = message;
    const { id: sheetId, title: sheetTitle } = message.sheet;

    const spreadsheet = await new Spreadsheet(sheetId).getClient();
    const sheet = spreadsheet.sheetsByTitle[sheetTitle];

    if (!sheet) throw new RequestError('Invalid sheet title', 422);

    await sheet.addRow(data);
  }
}

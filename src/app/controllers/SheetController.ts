import { Request, Response } from 'express';

import { UpdateSheetUseCase } from '../use-cases/UpdateSheetUseCase';

type UpdateSheet = Request<{ id: string }, unknown, Record<string, string>, { title: string }>;

export class SheetController {
  private updateSheetUseCase: UpdateSheetUseCase;

  constructor(updateSheetUseCase: UpdateSheetUseCase) {
    this.updateSheetUseCase = updateSheetUseCase;
  }

  addRow = async (req: UpdateSheet, res: Response) => {
    const { id } = req.params;
    const { title } = req.query;

    await this.updateSheetUseCase.execute({
      sheet: {
        id,
        title,
      },
      data: req.body,
    });

    return res.sendStatus(201);
  };
}

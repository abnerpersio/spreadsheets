import { Router } from 'express';

import { SheetController } from './app/controllers/SheetController';
import { UpdateSheetUseCase } from './app/use-cases/UpdateSheetUseCase';

export const routes = Router();

const updateSheetUseCase = new UpdateSheetUseCase();
const sheetController = new SheetController(updateSheetUseCase);

routes.post('/sheets/:id/rows', sheetController.addRow);

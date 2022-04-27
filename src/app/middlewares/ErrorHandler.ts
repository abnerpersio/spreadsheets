import { NextFunction, Request, Response } from 'express';

import { RequestError } from '../errors/RequestError';

export async function ErrorHandler(
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { statusCode = 500 } = error as RequestError;

  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
}

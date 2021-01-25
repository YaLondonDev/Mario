import { NextFunction, Request, Response } from 'express';
import { ResponseWorker } from '../utils/ResponseWorker';
import { validateDto } from '../utils/validateDto';

export const validateDtoMiddleware = (dto: Record<string, unknown>) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const value = req.body;
  if (!validateDto(value, dto)) {
    res.json(ResponseWorker.response400());
    return;
  }

  next();
};

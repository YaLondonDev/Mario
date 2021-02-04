import { NextFunction, Request, Response } from 'express';
import { ResponseUtils } from '../utils/ResponseUtils';
import { validateDto } from '../utils/validateDto';

export const validateDtoMiddleware = (dto: Record<string, unknown>) => (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const value = req.body;
  if (!validateDto(value, dto)) {
    res.json(ResponseUtils.response400());
    return;
  }

  next();
};

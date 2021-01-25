import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { ResponseWorker } from '../utils/ResponseWorker';

export const identityMiddleware = (authRequired = false) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.cookie && authRequired) {
    res.status(401).json(ResponseWorker.response401());
    return;
  }

  if (req.headers.cookie) {
    try {
      const userData = await axios.get(
        `https://ya-praktikum.tech/api/v2/auth/user`,
        {
          headers: { Cookie: req.headers.cookie },
        },
      );

      res.locals.user = userData.data;
    } catch (err) {
      if (authRequired) {
        res.status(401).json(ResponseWorker.response401());
        return;
      }
    }
  }

  next();
};

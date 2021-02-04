import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import { ResponseUtils } from '../utils/ResponseUtils';
import { yaApiEndpoint } from '../utils/consts';

export const identityMiddleware = (authRequired = false) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.cookie && authRequired) {
    res.status(401).json(ResponseUtils.response401());
    return;
  }

  if (req.headers.cookie) {
    try {
      const userData = await axios.get(yaApiEndpoint, {
        headers: { Cookie: req.headers.cookie },
      });

      res.locals.user = userData.data;
    } catch (err) {
      if (authRequired) {
        res.status(401).json(ResponseUtils.response401());
        return;
      }
    }
  }

  next();
};

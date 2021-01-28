import { Request, Response, Router } from 'express';

import { identityMiddleware } from '../../middlewares/identity.middleware';
import { ThemeController } from '../../controllers/ThemeController';
import { ResponseWorker } from '../../utils/ResponseWorker';

const themesRouter = Router();

themesRouter.get(
  '/',
  [identityMiddleware()],
  async (req: Request, res: Response) => {
    try {
      const themes = await ThemeController.getThemes(res.locals.user);
      res.json(ResponseWorker.response200(themes));
    } catch (error) {
      res.status(500).json(ResponseWorker.response500(error.message));
    }
  },
);

themesRouter.get(
  '/current',
  [identityMiddleware()],
  async (req: Request, res: Response) => {
    try {
      const theme = await ThemeController.getCurrentTheme(res.locals.user);
      res.json(ResponseWorker.response200(theme));
    } catch (error) {
      res.status(500).json(ResponseWorker.response500(error.message));
    }
  },
);

themesRouter.put(
  '/current',
  [identityMiddleware(true)],
  async (req: Request, res: Response) => {
    try {
      const theme = await ThemeController.setCurrentTheme(
        res.locals.user,
        req.body?.id,
      );
      res.json(ResponseWorker.response200(theme));
    } catch (error) {
      res.status(500).json(ResponseWorker.response500(error.message));
    }
  },

  themesRouter.post(
    '/',
    [identityMiddleware(true)],
    async (req: Request, res: Response) => {
      try {
        const id = await ThemeController.createTheme(res.locals.user, req.body);
        res.json(ResponseWorker.response200(id));
      } catch (error) {
        res.status(500).json(ResponseWorker.response500(error.message));
      }
    },
  ),
);

export { themesRouter };

import { Request, Response, Router } from 'express';

import { identityMiddleware } from '../../middlewares/identity.middleware';
import { ThemeController } from '../../controllers/ThemeController';
import { ResponseWorker } from '../../utils/ResponseWorker';
import { validateDtoMiddleware } from '../../middlewares/validateDtoMiddleware';
import { setCurrentThemeDto } from '../../dto/setCurrentThemeDto';

const themesRouter = Router();

themesRouter.get('/', (req: Request, res: Response) => {
  res.send('themes');
});

themesRouter.get(
  '/current',
  [identityMiddleware()],
  async (req: Request, res: Response) => {
    try {
      const theme = await ThemeController.getCurrentTheme(res.locals.user);
      console.log(theme);
      console.log(ResponseWorker.response200(theme));
      res.json(ResponseWorker.response200(theme));
    } catch (error) {
      res.status(500).json(ResponseWorker.response500(error.message));
    }
  },
);

themesRouter.post(
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
);

export { themesRouter };

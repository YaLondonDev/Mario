import { Router } from 'express';
import { API_PREFIX, API_VERSION } from '../utils/consts';
import { themesRouter } from './themes/themesRouter';

const appRouter = Router();

appRouter.use(`/${API_PREFIX}/v${API_VERSION}/themes`, themesRouter);

export { appRouter };

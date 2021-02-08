import { Request, Response, Router } from 'express';
import { ResponseUtils } from '../../utils/ResponseUtils';
import { Feedback } from '../../entities/mongo/feedbackModel';
import { identityMiddleware } from '../../middlewares/identity.middleware';

const feedbackRouter = Router();

// Get All
feedbackRouter.get('/', [identityMiddleware()], async (req: Request, res: Response) => {
  try {
    const feedbacks: any = await Feedback.find();
    res.json(ResponseUtils.response200(feedbacks));
  } catch (error) {
    res.status(500).json(ResponseUtils.response500(error.message));
  }
});

// Create One
feedbackRouter.post('/', [identityMiddleware()], async (req: Request, res: Response) => {
  const { userName, email, message } = req.body;
  const feedback = new Feedback({
    userName,
    email,
    message,
  });
  try {
    await feedback.save();
    res.json(ResponseUtils.response200({ succes: true }));
  } catch (error) {
    res.status(500).json(ResponseUtils.response500(error.message));
  }
});

export { feedbackRouter };

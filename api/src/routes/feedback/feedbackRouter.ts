import { Request, Response, Router } from 'express';
import { ResponseWorker } from '../../utils/ResponseWorker';
import { Feedback } from '../../entities/mongo/feedbackModel';
import { identityMiddleware } from '../../middlewares/identity.middleware';

const feedbackRouter = Router();

//Get All
feedbackRouter.get("/", [identityMiddleware()], async (req: Request, res: Response) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(ResponseWorker.response200(feedbacks));
  } catch (error) {
    res.status(500).json(ResponseWorker.response500(error.message));
  }
});

//Create One
feedbackRouter.post("/", [identityMiddleware()], async (req: Request, res: Response) => {
  const feedback = new Feedback({
    userName: req.body.userName,
    email: req.body.email,
    message: req.body.message
  });
  try {
    const newFeedback = await feedback.save();
    res.json(ResponseWorker.response200('true'));
  } catch (error) {
    res.status(500).json(ResponseWorker.response500(error.message));
  }
});

export { feedbackRouter }

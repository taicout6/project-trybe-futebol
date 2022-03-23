import * as express from 'express';
import { Request, Response } from 'express';

const clubsRoute = express.Router();

clubsRoute
  .route('/clubs')
  .get((_req: Request, res: Response) => { res.status(200).json('Hello World By Clubs'); });

export default clubsRoute;

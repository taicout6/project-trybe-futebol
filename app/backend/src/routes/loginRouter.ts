import * as express from 'express';
import { Request, Response } from 'express';
import LoginController from '../database/controllers/LoginController';

const loginRoute = express.Router();

loginRoute
  .route('/login')
  .post(LoginController)
  .get((_req: Request, res: Response) => { res.status(200).json('Hello World'); });

export default loginRoute;

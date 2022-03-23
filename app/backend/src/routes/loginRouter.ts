import * as express from 'express';
import { Request, Response } from 'express';
import { emailValidation, passwordValidation } from '../database/validations/loginValidations';
import { loginController, loginAuth } from '../database/controllers/LoginController';

const loginRoute = express.Router();

loginRoute
  .route('/login/validate')
  .get(loginAuth);

loginRoute
  .route('/login')
  .post(emailValidation, passwordValidation, loginController)
  .get((_req: Request, res: Response) => { res.status(200).json('Hello World'); });

export default loginRoute;

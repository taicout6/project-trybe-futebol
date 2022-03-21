import * as express from 'express';
import LoginController from '../database/controllers/LoginController';

const loginRoute = express();

loginRoute.route('/login').post(LoginController);

export default loginRoute;

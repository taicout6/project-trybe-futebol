import * as express from 'express';
import matchValidate from '../database/validations/matchValidation';
import getAllMatchs, { createMatch, finishMatch } from '../database/controllers/matchsController';

const matchsRoute = express.Router();

matchsRoute
  .route('/matchs/:id/finish')
  .patch(finishMatch);

matchsRoute
  .route('/matchs')
  .get(getAllMatchs)
  .post(matchValidate, createMatch);

export default matchsRoute;

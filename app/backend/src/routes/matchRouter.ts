import * as express from 'express';
import matchValidate from '../database/validations/matchValidation';
import {
  getAllMatchs,
  createMatch,
  finishMatch,
  updateMatch } from '../database/controllers/matchsController';

const matchsRoute = express.Router();

matchsRoute
  .route('/matchs/:id/finish')
  .patch(finishMatch);

matchsRoute
  .route('/matchs/:id')
  .patch(updateMatch);

matchsRoute
  .route('/matchs')
  .get(getAllMatchs)
  .post(matchValidate, createMatch);

export default matchsRoute;

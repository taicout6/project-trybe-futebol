import * as express from 'express';
import getAllMatchs, { createMatch } from '../database/controllers/matchsController';

const matchsRoute = express.Router();

// matchsRoute
//   .route('/matchs/:id')
//   .get(getMatchById);

matchsRoute
  .route('/matchs')
  .get(getAllMatchs)
  .post(createMatch);

export default matchsRoute;

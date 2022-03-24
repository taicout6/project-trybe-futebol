import * as express from 'express';
import { getAllClubs, getClubById } from '../database/controllers/ClubsController';

const clubsRoute = express.Router();

clubsRoute
  .route('/clubs/:id')
  .get(getClubById);

clubsRoute
  .route('/clubs')
  .get(getAllClubs);

export default clubsRoute;

import * as express from 'express';
import leaderBoardHome from '../database/controllers/leaderBoardHomeController';

const leaderBordRoute = express.Router();

leaderBordRoute.route('/leaderboard/home').get(leaderBoardHome);

leaderBordRoute.route('/leaderboard/away').get((_req, res) => {
  res.status(200).json('Hello by leaderboard away');
});

leaderBordRoute.route('/leaderboard').get((_req, res) => {
  res.status(200).json('Hello by leaderboard');
});

export default leaderBordRoute;

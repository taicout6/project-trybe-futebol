import * as express from 'express';

const leaderBordRoute = express.Router();

leaderBordRoute.route('/leaderboard/home').get((_req, res) => {
  res.status(200).json('Hello by leaderboard home');
});

leaderBordRoute.route('/leaderboard/away').get((_req, res) => {
  res.status(200).json('Hello by leaderboard away');
});

leaderBordRoute.route('/leaderboard').get((_req, res) => {
  res.status(200).json('Hello by leaderboard');
});

export default leaderBordRoute;

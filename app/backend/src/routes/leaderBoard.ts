import * as express from 'express';
import leaderBoardAway from '../database/controllers/leaderBoardAwayController';
import leaderBoardHome from '../database/controllers/leaderBoardHomeController';

const leaderBordRoute = express.Router();

leaderBordRoute.route('/leaderboard/home').get(leaderBoardHome);

leaderBordRoute.route('/leaderboard/away').get(leaderBoardAway);

// leaderBordRoute.route('/leaderboard').get((_req, res) => {
//   res.status(200).json('Hello by leaderboard');
// });

export default leaderBordRoute;

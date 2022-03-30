import { Request, Response } from 'express';
// import ClubModel from '../models/ClubModel';
// import MatchModel from '../models/MatchModel';

// const returnMatchs = async () => {
//   const result = await MatchModel.findAll({
//     where: { inProgress: false },
//     include: [
//       { model: ClubModel, as: 'homeClub', attributes: { exclude: ['id'] } },
//     ],
//   });
//   return result;
// };

const leaderBoardStructure = (name: string | undefined) => {
  const result = {
    name,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };
  return result;
};

const leaderBoardHome = async (_req: Request, res: Response) => {
  const result = leaderBoardStructure('Palmeiras');
  res.status(200).json(result);
};

export default leaderBoardHome;

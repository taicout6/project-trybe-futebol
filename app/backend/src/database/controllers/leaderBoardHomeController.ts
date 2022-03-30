import { Request, Response } from 'express';
import ILeaderBoard from '../../interfaces/LeaderBoard';
import IMatch from '../../interfaces/Match';
import ClubModel from '../models/ClubModel';
import MatchModel from '../models/MatchModel';

const returnAllMatchs = async () => {
  const result = await MatchModel.findAll({
    where: { inProgress: false },
    include: [
      { model: ClubModel, as: 'homeClub', attributes: { exclude: ['id'] } },
    ],
  });
  return result;
};

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

const leaderBoardHomeData = async () => {
  const allMatchs = await returnAllMatchs();
  const clubData: ILeaderBoard[] = [];
  allMatchs.forEach((match) => {
    const { homeClub }: IMatch = match;
    const club = leaderBoardStructure(homeClub?.clubName);
    const filterClubs = clubData.findIndex((index) => index.name === homeClub?.clubName);
    if (filterClubs < 0) {
      clubData.push(club);
    }
  });
  return clubData;
};

const leaderBoardHome = async (_req: Request, res: Response) => {
  const result = await leaderBoardHomeData();
  res.status(200).json(result);
};

export default leaderBoardHome;

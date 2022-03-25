import { Request, Response } from 'express';
import Club from '../models/ClubModel';
import MatchModel from '../models/MatchModel';

const getAllMatchs = async (_req: Request, res: Response) => {
  const matchs = await MatchModel.findAll({
    include: [
      { model: Club, as: 'homeClub', attributes: { exclude: ['id'] } },
      { model: Club, as: 'awayClub', attributes: { exclude: ['id'] } },
    ],
  });
  res.status(200).json(matchs);
};

export const createMatch = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
  const match = await MatchModel.create({
    homeTeam,
    awayTeam,
    homeTeamGoals,
    awayTeamGoals,
    inProgress,
  });
  res.status(201).json(match);
};

export const finishMatch = async (req:Request, res: Response) => {
  const { id } = req.params;
  const matchExist = await MatchModel.findByPk(id);
  if (!matchExist) {
    return res.status(404).json({ message: 'Match not found' });
  }
  await MatchModel.update({ inProgress: false }, { where: { id } });
  res.status(201).json({ message: 'Finish Match' });
};

export default getAllMatchs;

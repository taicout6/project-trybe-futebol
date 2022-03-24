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

export default getAllMatchs;

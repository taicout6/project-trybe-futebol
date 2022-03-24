import { Request, Response } from 'express';
import MatchModel from '../models/MatchModel';

const getAllMatchs = async (_req: Request, res: Response) => {
  const matchs = await MatchModel.findAll();
  res.status(200).json(matchs);
};

export default getAllMatchs;

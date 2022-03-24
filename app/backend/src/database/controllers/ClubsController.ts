import { Request, Response } from 'express';
import ClubModel from '../models/ClubModel';

export const getAllClubs = async (_req: Request, res: Response) => {
  const clubs = await ClubModel.findAll();
  res.status(200).json(clubs);
};

export const getClubById = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('Not implemented');
  res.status(200).json(id);
};

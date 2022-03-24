import { Request, Response } from 'express';

export const getAllClubs = (_req: Request, res: Response) => {
  res.status(200).json('All clubs');
};

export const getClubById = (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('Not implemented');
  res.status(200).json(id);
};

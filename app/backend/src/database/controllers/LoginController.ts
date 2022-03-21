import { Request, Response } from 'express';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';
import ILogin from '../../interfaces/Login';
import IUser from '../../interfaces/User';
import UserModel from '../models/UserModel';

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

const loginController = async (req: Request, res: Response) => {
  const { email }: ILogin = req.body;
  const user = await UserModel.findOne({ where: { email } });
  const { id, username, role } = user as IUser;
  const token = jwt.sign({ username }, JWT_SECRET, { algorithm: 'HS256' });
  res.status(200).json({ user: { id, username, role, email }, token });
};

export default loginController;

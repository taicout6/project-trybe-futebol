import ILogin from './Login';

export default interface IUser extends ILogin {
  id: number;
  username: string;
  role: string;
}

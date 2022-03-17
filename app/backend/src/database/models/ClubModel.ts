import { DataTypes, Model } from 'sequelize';
import db from '.';
import Match from './MatchModel';

class Club extends Model {
  public id: number;
  public club_name: string;
}

Club.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  club_name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'clubs',
});

Match.belongsToMany(Club, {
  as: 'club_id',
  foreignKey: 'home_team',
  otherKey: 'away_team',
  through: Match,
});

export default Club;

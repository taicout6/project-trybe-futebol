import { DataTypes, Model } from 'sequelize';
import db from '.';
import Match from './MatchModel';

class Club extends Model {
  public id: number;

  public clubName: string;
}

Club.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  clubName: {
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

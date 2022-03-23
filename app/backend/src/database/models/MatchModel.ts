import { DataTypes, Model } from 'sequelize';
import db from '.';

class Match extends Model {
  public id: number;

  public homeTeam: number;

  public homeTeamGoals: number;

  public awayTeam: number;

  public awayTeamGoals: number;

  public inProgress: boolean;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  home_team: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  home_team_goals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  away_team: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'clubs',
      key: 'id',
    },
  },
  away_team_goals: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  in_progress: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  tableName: 'matchs',
});

export default Match;

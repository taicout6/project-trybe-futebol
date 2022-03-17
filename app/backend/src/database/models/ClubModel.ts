import { DataTypes, Model } from 'sequelize';
import db from '.';
import Match from './MatchModel';
// import OtherModel from './OtherModel';

class Club extends Model {
  // public <campo>!: <tipo>;
  public id: number;
  public club_name: string;
}

Club.init({
  // ... Campos
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
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
  tableName: 'clubs',
});

/**
  * `Workaround` para aplicar as associations em TS: 
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
Match.belongsToMany(Club, {
  as: 'club_id',
  foreignKey: 'home_team',
  otherKey: 'away_team',
  through: Match,
});
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Club;

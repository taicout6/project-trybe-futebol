import { Request, Response } from 'express';
import IClubStatistics from '../../interfaces/ClubStatistics';
import IMatch from '../../interfaces/Match';
import ClubModel from '../models/ClubModel';
import MatchModel from '../models/MatchModel';

// Busca todas as partidas com foco nos times da casa
const returnAllMatchs = async () => {
  const result = await MatchModel.findAll({
    where: { inProgress: false },
    include: [
      { model: ClubModel, as: 'homeClub', attributes: { exclude: ['id'] } },
    ],
  });
  return result;
};

// Retorna o objeto com a estrutura das estatísticas que cada clube deve ter
const clubStructure = (name: string | undefined) => {
  const result = {
    name,
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
  };
  return result;
};

// Atualiza as estatísticas de cada clube
const setLeaderBoardHomeData = (clubMatch: IMatch, clubObj: IClubStatistics) => {
  const objVal = clubObj;

  // Atualiza as vitórias e total de pontos
  if (clubMatch.homeTeamGoals > clubMatch.awayTeamGoals) {
    objVal.totalVictories += 1;
    objVal.totalPoints += 3;
  }

  // Atualiza os empates e total de pontos
  if (clubMatch.homeTeamGoals === clubMatch.awayTeamGoals) {
    objVal.totalDraws += 1;
    objVal.totalPoints += 1;
  }

  // Atualiza as derrotas
  if (clubMatch.homeTeamGoals < clubMatch.awayTeamGoals) {
    objVal.totalLosses += 1;
  }

  // Atualiza o total de jogos
  objVal.totalGames += 1;

  // Atualiza os gols a favor
  objVal.goalsFavor += clubMatch.homeTeamGoals;

  // Atualiza os gols sofridos
  objVal.goalsOwn += clubMatch.awayTeamGoals;

  // Atualiza o saldo de gols
  objVal.goalsBalance = objVal.goalsFavor - objVal.goalsOwn;

  // Atualiza o aproveitamento
  objVal.efficiency = parseFloat(((objVal.totalPoints / (objVal.totalGames * 3)) * 100).toFixed(2));

  return objVal;
};

// Função que vai atualizar os dados do leaderBoardHome
const leaderBoardHomeData = async () => {
  // Função que retorna todas as partidas com foco no time da casa
  const allMatchs = await returnAllMatchs();

  // Array que vai armazenar as estatísticas de cada clube
  const clubsStatisticsData: IClubStatistics[] = [];

  allMatchs.forEach((match) => {
    // partida individual
    const clubMatch: IMatch = match;

    // Pega o nome do clube da casa de cada partida individual
    const clubName = clubMatch.homeClub?.clubName;

    // Objeto contendo as estatísticas zeradas de cada clube
    const clubObj = clubStructure(clubName);

    // Chamando função que atualiza as estatísticas de cada clube
    setLeaderBoardHomeData(clubMatch, clubObj);

    // Evita que os clubes se repitam
    const filterClubsIndex = clubsStatisticsData.findIndex((index) => index.name === clubName);

    // Caso não exista um clube no array, ele é adicionado
    // (index negativo indica que não existe no array)
    if (filterClubsIndex < 0) {
      clubsStatisticsData.push(clubObj);
    }

    // setLeaderBoardHomeData(clubMatch, clubsStatisticsData[filterClubsIndex]);
  });

  // Retorno do array com dados atualizados
  return clubsStatisticsData;
};

const leaderBoardHome = async (_req: Request, res: Response) => {
  const result = await leaderBoardHomeData();
  res.status(200).json(result);
};

export default leaderBoardHome;

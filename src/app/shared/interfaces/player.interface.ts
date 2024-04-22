import { IPlayerLeague } from './player-league.interface';

export interface IPlayer {
    id: string;
    accountId: string;
    puuid: string;
    name: string;
    profileIconId: number;
    revisionDate: number;
    summonerLevel: number;
    champions: IPlayerChampionMastery[];
    leagues: IPlayerLeague[];
    matches: any[];
}

export interface IPlayerChampionMastery {
    championId: number;
    championLevel: number;
    championPoints: number;
    lastPlayTime: number;
    championPointsSinceLastLevel: number;
    championPointsUntilNextLevel: number;
    chestGranted: boolean;
    tokensEarned: number;
    summonerId: string;
  }

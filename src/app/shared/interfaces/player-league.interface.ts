import { LEAGUES } from '../enums/leagues.enum';
import { TIERS } from '../enums/tiers.enum';

export interface IPlayerLeague {
  leagueId: string;
  queueType: LEAGUES;
  tier: TIERS;
  rank: string; // DIVISION FROM LEAGUE V4 API (I, II, III, IV)
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export interface IPlayerTopLeague {
  entries: IPlayerLeague[];
}

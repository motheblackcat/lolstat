export interface IMatchHistory {
  info: IMatchHistoryInfo;
  metadata: any;
}

export interface IMatchHistoryInfo {
  gameType: string;
  gameDuration: number;
  queueId: number;
  participants: IMatchHistoryParticipant[];
}

export interface IMatchHistoryParticipant {
  summonerId: string;
  championId: number;
  championName: string;
  totalDamageDealt: number;
  totalDamageDealtToChampions: number;
  totalMinionsKilled: number;
  visionScore: number;
  kills: number;
  assists: number;
  deaths: number;
  win: boolean;
}

export interface IPlayerMatchData {
  kda: number;
  csPerMin: number;
  dmgPerMin: number;
  visionScore: number;
  championId: number;
  win: boolean;
}

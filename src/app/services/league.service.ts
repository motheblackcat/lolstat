import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_KEY } from '../../../secret/api-key.const';
import { IPlayerLeague, IPlayerTopLeague } from '../shared/interfaces/player-league.interface';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private http: HttpClient) { }

  // getLeagueByTier(queueType: string, tier: string, division: string): Observable<IPlayerLeague[]> {
  //   return this.http.get<IPlayerLeague[]>(
  //     `https://euw1.api.riotgames.com/lol/league/v4/entries/${queueType}/${tier}/${division}?page=2&api_key=${API_KEY}`
  //   )
  //     .pipe(
  //       map((players: IPlayerLeague[]) => players.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 50))
  //     );
  // }

  getChallengerLeague(queueType: string): Observable<IPlayerLeague[]> {
    return this.http.get<IPlayerTopLeague>(
      `https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/${queueType}?api_key=${API_KEY}`
    )
      .pipe(
        map((playersChallenger: IPlayerTopLeague) =>
          playersChallenger.entries.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 50)
        )
      );
  }

  getGrandMasterLeague(queueType: string): Observable<IPlayerLeague[]> {
    return this.http.get<IPlayerTopLeague>(
      `https://euw1.api.riotgames.com/lol/league/v4/grandmasterleagues/by-queue/${queueType}?api_key=${API_KEY}`
    )
      .pipe(
        map((playersGrandMaster: IPlayerTopLeague) =>
          playersGrandMaster.entries.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 50)
        )
      );
  }

  getMasterLeague(queueType: string): Observable<IPlayerLeague[]> {
    return this.http.get<IPlayerTopLeague>(
      `https://euw1.api.riotgames.com/lol/league/v4/masterleagues/by-queue/${queueType}?api_key=${API_KEY}`
    )
      .pipe(
        map((playersMaster: IPlayerTopLeague) =>
          playersMaster.entries.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 50)
        )
      );
  }
}

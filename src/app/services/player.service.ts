import { Observable } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { STORAGE_KEY } from '../shared/enums/storage-key.enum';
import { IPlayer } from '../shared/interfaces/player.interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  /**
   * USAGE: Return from our backend a player object containing the summoner infos,
   * the 3 most played champions, the leagues infos and the 10 last matches details.
   * NOTE: The count limit for champions and matches are set in our backend
   **/
  getPlayerByName(summonerName: string): Observable<IPlayer> {
    const options = summonerName ? { params: new HttpParams().set('summonerName', summonerName) } : {};
    return this.http.get<IPlayer>(`${this.url}/summoner-by-name`, options);
  }

  /**
   * USAGE: Return the url of the Player Icon
   **/
  getPlayerIconByProfileIconId(profileIconId: number): string {
    return `http://ddragon.leagueoflegends.com/cdn/${localStorage[STORAGE_KEY.VERSION_JSON]}/img/profileicon/${profileIconId}.png`;
  }
}

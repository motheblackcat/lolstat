

import { Injectable } from '@angular/core';

import { STORAGE_KEY } from '../shared/enums/storage-key.enum';
import { IChampion } from '../shared/interfaces/champion.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  constructor(private storageService: StorageService) { }

  /**
   * USAGE: Return the championJSON data from the Storage
   * TODO: Add the missing return type for the champion masteries
   */
  getAllChampions(): IChampion[] | any[] {
    return this.storageService.loadData(STORAGE_KEY.CHAMPIONS_JSON) as IChampion[];
  }

  /**
   * USAGE: Return a champion by name from the championJSON data from the Storage
   */
  getChampionByName(championName: string): any {
    const champion: IChampion = this.getAllChampions().find(champ => champ.name === championName);
    champion.thumb = `http://ddragon.leagueoflegends.com/cdn/${localStorage[STORAGE_KEY.VERSION_JSON]}/img/champion/${champion.id}.png`;
    return champion;
  }

  /**
   * USAGE: Return a champion thumb
   */
  getChampionThumbById(championId: number): string {
    const champion: IChampion = this.getAllChampions().find(champ => champ.key === championId.toString());
    return `http://ddragon.leagueoflegends.com/cdn/${localStorage[STORAGE_KEY.VERSION_JSON]}/img/champion/${champion.id}.png`;
  }
}

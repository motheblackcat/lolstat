import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { STORAGE_KEY } from '../shared/enums/storage-key.enum';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private http: HttpClient) { }

  /**
   * USAGE: Get latest version and then champions and queues from the JSONS of the Riot DDragon and store it locally
   **/
  initStorageData() {
    this.storeVersionFromJSON().subscribe(
      versions => {
        this.saveData(STORAGE_KEY.VERSION_JSON, versions[0]);
        this.storeAllChampionsFromJSON();
        this.storeAllQueueIdFromJSON();
      }
    );
  }

  /**
   * USAGE: Get all version data from the versions.json of the Riot DDragon and store it locally
   **/
  storeVersionFromJSON(): Observable<string[]> {
    return this.http.get<string[]>('https://ddragon.leagueoflegends.com/api/versions.json');
  }

  /**
   * USAGE: Get all champions from the champion.json of the Riot DDragon and store it locally
   * TODO: The language should be dynamic parameters
   **/
  storeAllChampionsFromJSON() {
    this.http.get(`http://ddragon.leagueoflegends.com/cdn/${localStorage[STORAGE_KEY.VERSION_JSON]}/data/en_US/champion.json`)
      .subscribe(
        (res: { data: any }) => this.saveData(STORAGE_KEY.CHAMPIONS_JSON, Object.values(res.data))
      );
  }

  /**
   * USAGE: Get all queues data from the queues.json of the Riot DDragon and store it locally
   * TODO: The version and language should be dynamic parameters
   **/
  storeAllQueueIdFromJSON() {
    this.http.get('https://static.developer.riotgames.com/docs/lol/queues.json')
      .subscribe(
        queue => this.saveData(STORAGE_KEY.QUEUE_JSON, Object.values(queue))
      );
  }

  /**
   * USAGE: Save data to the storage as a key / value pair
   * NOTE: The current use of localStorage force using a string object for data
   * TODO: Define possible types for data parameter
   */
  saveData(key: string, data: any) {
    localStorage.setItem(key, typeof data !== 'string' ? JSON.stringify(data) : data);
  }

  /**
   * USAGE: Load data from the storage
   * TODO: Define possible return types
   */
  loadData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * USAGE: Remove data from the storage by key
   */
  removeData(key: string) {
    localStorage.removeItem(key);
  }
}

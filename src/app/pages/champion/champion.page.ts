import { ChampionService } from 'src/app/services/champion.service';
import { IChampion } from 'src/app/shared/interfaces/champion.interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {

  titlePage = 'Champions';

  championsNames: string[] = [];
  championsList: string[] = [];
  selectedChampion: IChampion;

  constructor(private championService: ChampionService) { };

  ngOnInit() {
    this.championsNames = this.championService.getAllChampions().map((champion: IChampion) => champion.name);
  };

  displayChampionsList(championName: string) {
    this.championsList = [];
    if (championName !== '') {
      this.championsList = this.championsNames.filter(name => name.toLowerCase().indexOf(championName.toLowerCase()) > -1);
    }
  }

  displayChampion(championName: string) {
    this.selectedChampion = this.championService.getChampionByName(championName);
  };
}

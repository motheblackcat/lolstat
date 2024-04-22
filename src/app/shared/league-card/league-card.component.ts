import { Component, Input, OnInit } from '@angular/core';

import { leagues } from '../consts/leagues.const';
import { tiers } from '../consts/tiers.const';
import { IPlayerLeague } from '../interfaces/player-league.interface';

@Component({
  selector: 'app-league-card',
  templateUrl: './league-card.component.html',
  styleUrls: ['./league-card.component.scss'],
})
export class LeagueCardComponent implements OnInit {

  @Input() playerLeague: IPlayerLeague;
  tierIcon: string;
  queueType: string;
  winrate: number;

  constructor() { }

  ngOnInit() {
    this.tierIcon = tiers.find(tier => tier.name === this.playerLeague.tier).iconUrl;
    this.queueType = leagues.find(league => league.value === this.playerLeague.queueType).name;
    this.winrate = Math.round((this.playerLeague.wins / (this.playerLeague.wins + this.playerLeague.losses)) * 100);
  }
}

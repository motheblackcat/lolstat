import { Component, Input, OnInit } from '@angular/core';

import { IPlayerLeague } from '../interfaces/player-league.interface';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.scss'],
})
export class StatCardComponent implements OnInit {

  @Input() player: IPlayerLeague;
  winrate: number;

  constructor() { }

  ngOnInit() {
    this.winrate = Math.round((this.player.wins / (this.player.wins + this.player.losses)) * 100);
  }
}

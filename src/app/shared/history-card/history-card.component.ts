import { ChampionService } from 'src/app/services/champion.service';
import { StorageService } from 'src/app/services/storage.service';

import { Component, Input, OnInit } from '@angular/core';

import { STORAGE_KEY } from '../enums/storage-key.enum';
import {
    IMatchHistory, IMatchHistoryParticipant, IPlayerMatchData
} from '../interfaces/player-match-history.interface';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent implements OnInit {

  @Input() summonerId: string;
  @Input() matchHistory: IMatchHistory;

  participant: IPlayerMatchData = {
    kda: 0,
    csPerMin: 0,
    dmgPerMin: 0,
    visionScore: 0,
    championId: 0,
    win: false
  };

  gameType: string;

  constructor(public championService: ChampionService, public storageService: StorageService) { }

  ngOnInit() {
    const participantApi: IMatchHistoryParticipant = this.matchHistory.info.participants.find(par => par.summonerId === this.summonerId);
    const gameDuration = this.matchHistory.info.gameDuration / 60000;
    this.gameType = this.storageService.loadData(STORAGE_KEY.QUEUE_JSON)
      .find(queue => queue.queueId === this.matchHistory.info.queueId).description.replace(' games', '');

    this.participant = {
      kda: (participantApi.kills + participantApi.assists) / participantApi.deaths,
      csPerMin: participantApi.totalMinionsKilled / gameDuration,
      dmgPerMin: Math.round(participantApi.totalDamageDealt / gameDuration),
      visionScore: participantApi.visionScore,
      championId: participantApi.championId,
      win: participantApi.win
    };
  }
}

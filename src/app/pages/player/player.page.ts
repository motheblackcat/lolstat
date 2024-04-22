import { ChampionService } from 'src/app/services/champion.service';
import { PlayerService } from 'src/app/services/player.service';
import { chips } from 'src/app/shared/consts/chips.const';
import { CHIPS } from 'src/app/shared/enums/chips.enum';
import { IPlayer } from 'src/app/shared/interfaces/player.interface';

import { Component, OnInit } from '@angular/core';

import { IMatchHistory } from '../../shared/interfaces/player-match-history.interface';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  player: IPlayer;
  chipsArray: { name: string; color: string; icon: string; title: string }[] = [];

  constructor(public playerService: PlayerService, public championService: ChampionService) { }

  ngOnInit() { }

  searchSummoner(summonerName: string) {
    this.chipsArray = [];

    this.playerService.getPlayerByName(summonerName).subscribe(player => {
      this.player = player;
      this.addChip(player.id, player.matches);
    });
  }

  addChip(summonerId: string, matches: IMatchHistory[]) {
    const playerHistory = matches.map(match => match.info.participants.find(par => par.summonerId === summonerId));
    const totalMatches = matches.length;

    chips.forEach(chip => {
      let dataArray = [];
      let count = 0;

      switch (chip.name) {
        case CHIPS.WINNER:
          dataArray = playerHistory.map(match => match.win);
          dataArray.forEach(win => {
            if (win) {
              count++;
            }
          });

          if (!this.chipsArray.includes(chip)) {
            if (count > (totalMatches / 2)) {
              this.chipsArray.push(chip);
            } else if (count === (totalMatches / 2)) {
              return;
            } else {
              this.chipsArray.push(chips[1]);
            }
          }
          break;

        case CHIPS.HIGH_DMG:
          dataArray = playerHistory.map(match => match.totalDamageDealtToChampions);
          dataArray.forEach(dmg => {
            if (dmg > 22000) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_DMG:
          dataArray = playerHistory.map(match => match.totalDamageDealtToChampions);
          dataArray.forEach(dmg => {
            if (dmg < 10000) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.HIGH_VISION:
          dataArray = playerHistory.map(match => match.visionScore);
          dataArray.forEach(visionScore => {
            if (visionScore > 50) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_VISION:
          dataArray = playerHistory.map(match => match.visionScore);
          dataArray.forEach(visionScore => {
            if (visionScore < 20) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.HIGH_CS:
          dataArray = playerHistory.map(match => match.totalMinionsKilled);
          dataArray.forEach(cs => {
            if (cs > 200) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_CS:
          dataArray = playerHistory.map(match => match.totalMinionsKilled);
          dataArray.forEach(cs => {
            if (cs < 20) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_DEATHS:
          dataArray = playerHistory.map(match => match.deaths);
          dataArray.forEach(deaths => {
            if (deaths <= 5) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.HIGH_DEATHS:
          dataArray = playerHistory.map(match => match.deaths);
          dataArray.forEach(deaths => {
            if (deaths >= 10) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.HIGH_ASSISTS:
          dataArray = playerHistory.map(match => match.assists);
          dataArray.forEach(assists => {
            if (assists >= 15) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_ASSISTS:
          dataArray = playerHistory.map(match => match.assists);
          dataArray.forEach(assists => {
            if (assists < 10) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.HIGH_KILL_COUNT:
          dataArray = playerHistory.map(match => match.kills);
          dataArray.forEach(kills => {
            if (kills >= 20) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        case CHIPS.LOW_KILL_COUNT:
          dataArray = playerHistory.map(match => match.kills);
          dataArray.forEach(kills => {
            if (kills < 3) {
              count++;
            }
          });

          if (count > (totalMatches / 2) && !this.chipsArray.includes(chip)) {
            this.chipsArray.push(chip);
          }
          break;

        default:
          dataArray = playerHistory.map(match => match.championName);
          dataArray.forEach(champion => {
            let counter = 0;
            dataArray.forEach(champName => {
              if (champion === champName) {
                counter++;
              }
            });

            const championChip = { name: champion, color: 'success', icon: 'heart', title: `This player loves ${champion}` };

            if (counter > (totalMatches / 2) && !this.chipsArray.find(currChip => currChip.name === championChip.name)) {
              this.chipsArray.push(championChip);
            }
          });
          break;
      }
    });
  }
}

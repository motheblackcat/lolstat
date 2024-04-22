import { Observable } from 'rxjs';
import { LeagueService } from 'src/app/services/league.service';
import { TIERS } from 'src/app/shared/enums/tiers.enum';
import { IPlayerLeague } from 'src/app/shared/interfaces/player-league.interface';

import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { leagues } from '../../shared/consts/leagues.const';
import { tiers } from '../../shared/consts/tiers.const';

@Component({
  selector: 'app-ranked-stats',
  templateUrl: './ranked-stats.page.html',
  styleUrls: ['./ranked-stats.page.scss'],
})
export class ApexStatsPage implements OnInit {

  tiersArray = tiers.slice(0, 3);
  leagueArray = leagues;

  TIERS = TIERS;

  form: UntypedFormGroup;

  currentLeague$: Observable<IPlayerLeague[]>;

  get tierFormControl(): string {
    return this.form.get('tier').value;
  }

  constructor(private fb: UntypedFormBuilder, private leagueService: LeagueService) { }

  ngOnInit() {
    this.form = this.fb.group({
      tier: ['', Validators.required],
      league: ['', Validators.required]
    });
  }

  checkForm() {
    const queueType = this.form.get('league').value;
    const tier = this.tierFormControl;

    switch (tier) {
      case TIERS.CHALLENGER:
        this.currentLeague$ = this.leagueService.getChallengerLeague(queueType);
        break;
      case TIERS.GRANDMASTER:
        this.currentLeague$ = this.leagueService.getGrandMasterLeague(queueType);
        break;
      default:
        this.currentLeague$ = this.leagueService.getMasterLeague(queueType);
        break;
    }
  }
}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ChampionPage } from './pages/champion/champion.page';
import { ForgotPassPage } from './pages/forgot-pass/forgot-pass.page';
import { HomePage } from './pages/home/home.page';
import { LfgPage } from './pages/lfg/lfg.page';
import { LoginPage } from './pages/login/login.page';
import { PlayerPage } from './pages/player/player.page';
import { ApexStatsPage } from './pages/ranked-stats/ranked-stats.page';
import { RegisterPage } from './pages/register/register.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },
  {
    path: 'forgot-pass',
    component: ForgotPassPage
  },
  {
    path: 'player',
    component: PlayerPage
  },
  {
    path: 'lfg',
    component: LfgPage
  },
  {
    path: 'champion',
    component: ChampionPage
  },
  {
    path: 'apex-stats',
    component: ApexStatsPage
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

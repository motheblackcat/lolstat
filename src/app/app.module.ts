import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionPage } from './pages/champion/champion.page';
import { ForgotPassPage } from './pages/forgot-pass/forgot-pass.page';
import { HomePage } from './pages/home/home.page';
import { LfgPage } from './pages/lfg/lfg.page';
import { LoginPage } from './pages/login/login.page';
import { PlayerPage } from './pages/player/player.page';
import { ApexStatsPage } from './pages/ranked-stats/ranked-stats.page';
import { RegisterPage } from './pages/register/register.page';
import { HistoryCardComponent } from './shared/history-card/history-card.component';
import { LeagueCardComponent } from './shared/league-card/league-card.component';
import { MenuComponent } from './shared/menu/menu.component';
import { StatCardComponent } from './shared/stat-card/stat-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        LoginPage,
        RegisterPage,
        ForgotPassPage,
        PlayerPage,
        LfgPage,
        ApexStatsPage,
        RegisterPage,
        ChampionPage,
        MenuComponent,
        LeagueCardComponent,
        HistoryCardComponent,
        StatCardComponent
    ],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, HttpClientModule, CommonModule],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule { }

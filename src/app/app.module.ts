import { NgModule as ModNg } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule as RoutMod } from './app-routing.module';
import { AppzinComp as AppComp } from './app.component';
import { MenuBarComponent as MBComp } from './components/menu-bar/menu-bar.component';
import { MenuTitleComponent as MMTComp } from './components/menu-title/menu-title.component';
import { BigCardComponent as CBC } from './components/big-card/big-card.component';
import { SmallCardComponent as SCC } from './components/small-card/small-card.component';
import { HomeComponent as HomeComp } from './pages/home/home.component';
import { ContentComponent as ContentCompp } from './pages/content/content.component';


@ModNg({
  declarations: [
    AppComp,
    MBComp,
    MMTComp,
    CBC,
    SCC,
    HomeComp,
    ContentCompp
  ],
  imports: [
    BrowserModule,
    RoutMod
  ],
  providers: [],
  bootstrap: [AppComp]
})
export class Appzin { }

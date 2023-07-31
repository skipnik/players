import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { playerReducer } from './state/player-state/player.reducer';
import { PlayrList } from './components/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({playerState: playerReducer}, {}),
    PlayrList
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

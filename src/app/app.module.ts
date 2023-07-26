import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {storeReducer} from "./store/state.reducer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forFeature('store', storeReducer),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

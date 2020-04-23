import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NuevosLanzamientosApi } from "./api/nuevos-lanzamientos.api";
import { HttpClientModule } from "@angular/common/http";
import { ROOT_REDUCERS } from "./store/reducers";
import { StoreModule } from "@ngrx/store";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { ROOT_EFFECTS } from "./store/effects";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictStateImmutability: true,
        strictStateSerializability: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      name: "Dinero Express Store",

      // In a production build you would want to disable the Store Devtools
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(ROOT_EFFECTS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

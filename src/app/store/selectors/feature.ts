import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../reducers";
import * as fromNuevosLanzamietnos from "../reducers/nuevos-lanzamientos";

export const selectNuevosLanzamientos = createFeatureSelector<
  AppState,
  fromNuevosLanzamietnos.State
>(fromNuevosLanzamietnos.key);

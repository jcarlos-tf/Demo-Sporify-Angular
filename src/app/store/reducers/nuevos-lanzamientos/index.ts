import * as fromNuevosLanzamientos from "./nuevos-lanzamientos.reducer";
import { combineReducers } from "@ngrx/store";

export const key = "nLanzamientos";

export type State = {
  nuevosLanzamientos: fromNuevosLanzamientos.State;
};

export const reducers = combineReducers<State>({
  nuevosLanzamientos: fromNuevosLanzamientos.reducer,
});

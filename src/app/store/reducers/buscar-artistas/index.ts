import * as fromBuscarArtistas from "../buscar-artistas/buscar-artistas.reducer";
import { combineReducers } from "@ngrx/store";

export const key = "buscarArtistas";

export type State = {
  buscarArtistas: fromBuscarArtistas.State;
};

export const reducers = combineReducers<State>({
  buscarArtistas: fromBuscarArtistas.reducer,
});

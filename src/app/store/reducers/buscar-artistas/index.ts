import * as fromBuscarArtistas from "../buscar-artistas/buscar-artistas.reducer";
import { combineReducers } from "@ngrx/store";
import * as fromArtistaSeleccionado from "./cliente-seleccionado.reducer";

export const key = "buscarArtistas";

export type State = {
  buscarArtistas: fromBuscarArtistas.State;
  artistaSeleccionado: string;
};

export const reducers = combineReducers<State>({
  buscarArtistas: fromBuscarArtistas.reducer,
  artistaSeleccionado: fromArtistaSeleccionado.reducer,
});

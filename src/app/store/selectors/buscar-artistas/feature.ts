import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../reducers";
import * as fromBuscarArtistas from "../../reducers/buscar-artistas";

export const selectBuscarArtistas = createFeatureSelector<
  AppState,
  fromBuscarArtistas.State
>(fromBuscarArtistas.key);

import * as fromBuscarArtistas from "../../reducers/buscar-artistas";
import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../reducers";

export const selectBuscarArtistas = createFeatureSelector<
  AppState,
  fromBuscarArtistas.State
>(fromBuscarArtistas.key);

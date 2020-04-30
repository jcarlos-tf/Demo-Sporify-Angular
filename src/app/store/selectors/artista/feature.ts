import { createFeatureSelector } from "@ngrx/store";
import { AppState } from "../../reducers";
import * as fromConseguirArtista from "../../reducers/artista";

export const selectConseguirArtista = createFeatureSelector<
  AppState,
  fromConseguirArtista.State
>(fromConseguirArtista.key);

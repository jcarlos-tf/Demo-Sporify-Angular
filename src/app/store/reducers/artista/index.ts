import * as fromConseguirArtista from "../../reducers/artista/artista.reducer";
import { combineReducers } from "@ngrx/store";

export const key = "conseguirArtista";

export type State = {
  conseguirArtista: fromConseguirArtista.State;
};

export const reducers = combineReducers<State>({
  conseguirArtista: fromConseguirArtista.reducer,
});

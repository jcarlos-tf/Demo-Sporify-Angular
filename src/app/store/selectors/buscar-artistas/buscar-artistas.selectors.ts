import { createSelector } from "@ngrx/store";
import { selectBuscarArtistas } from "./feature";

const selectBuscarArtistasReducer = createSelector(
  selectBuscarArtistas,
  (estado) => estado.buscarArtistas
);

export const selecCargadoBuscarArtistas = createSelector(
  selectBuscarArtistasReducer,
  (estado) => estado.cargado
);

export const selectCargandoBuscarArtistas = createSelector(
  selectBuscarArtistasReducer,
  (estado) => estado.cargando
);

export const selectBusarArtistasError = createSelector(
  selectBuscarArtistasReducer,
  (estado) => estado.error
);

export const selectBuscarArtistasResultados = createSelector(
  selectBuscarArtistasReducer,
  (estado) => estado.resultados
);

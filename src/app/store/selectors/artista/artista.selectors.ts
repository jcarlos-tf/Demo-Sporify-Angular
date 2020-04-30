/* import { createSelector } from "@ngrx/store";
import { selectConseguirArtista } from "./feature";

const selectConseguirArtistaReducer = createSelector(
  selectConseguirArtista,
  (estado) => estado.conseguirArtista
);

export const selectCargadoConseguirArtista = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.cargado
);

export const selectCargandoConseguirArtista = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.cargando
);

export const selectConseguirArtistaError = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.error
);

export const selectConseguirArtistaResultados = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.resultados
);
 */
import { createSelector } from "@ngrx/store";
import { selectConseguirArtista } from "./feature";

const selectConseguirArtistaReducer = createSelector(
  selectConseguirArtista,
  (estado) => estado.conseguirArtista
);

export const selecCargadoConseguirArtista = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.cargado
);

export const selectCargandoConseguirArtista = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.cargando
);

export const selectConseguirArtistaError = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.error
);

export const selectConseguirArtistaResultados = createSelector(
  selectConseguirArtistaReducer,
  (estado) => estado.resultados
);

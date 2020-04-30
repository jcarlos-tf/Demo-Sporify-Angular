import { createSelector } from "@ngrx/store";
import { selectBuscarArtistas } from "./feature";

export const selectClienteSeleccionadoId = createSelector(
  selectBuscarArtistas,
  (estado) => estado.artistaSeleccionado
);

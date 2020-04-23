import { createSelector } from "@ngrx/store";
import { selectNuevosLanzamientos } from "./feature";

const selectNuevosLanzamientosReducer = createSelector(
  selectNuevosLanzamientos,
  (estado) => estado.nuevosLanzamientos
);

export const selectCargadoNuevosLanzamientos = createSelector(
  selectNuevosLanzamientosReducer,
  (estado) => estado.cargado
);

export const selectCargandoLanzamientos = createSelector(
  selectNuevosLanzamientosReducer,
  (estado) => estado.cargando
);

export const selectLanzamientosError = createSelector(
  selectNuevosLanzamientosReducer,
  (estado) => estado.error
);

export const selectLanzamientosResultados = createSelector(
  selectNuevosLanzamientosReducer,
  (estado) => estado.resultados
);

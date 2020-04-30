import { createAction, props } from "@ngrx/store";
import {
  Albums,
  error,
} from "src/app/types/nuevos-lanzamientos/nuevos-lanzamientos";

export const buscarNuevosLanzamientos = createAction(
  "[nLanzamientos] Buscar Nuevos Lanzamientos"
);

export const buscarNuevosLanzamintosExito = createAction(
  "[nLanzamientos] Busqueda Nuevos Lanzamientos",
  props<{ payload: Albums }>()
);

export const buscarNuevosLanzamientosError = createAction(
  "[nLanzaminetos] Busqueda Nuevos Lanzamientos Error",
  props<{ error: error }>()
);

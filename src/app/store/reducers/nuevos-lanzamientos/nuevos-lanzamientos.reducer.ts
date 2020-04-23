import { Albums } from "src/app/types/nuevos-lanzamientos/nuevos-lanzamientos";
import { Action, createReducer } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import * as fromNuevosLanzamientos from "../../actions/nuevos-lanzamientos/nuevos-lanzamientos.actions";

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: any;
  resultados: Albums;
};

const estadoInicial: State = {
  cargado: false,
  cargando: false,
  error: null,
  resultados: null,
};

export function reducer(estado: State, action: Action) {
  return createReducer(
    estadoInicial,
    mutableOn(fromNuevosLanzamientos.buscarNuevosLanzamientos, (estado) => {
      estado.cargado = false;
      estado.cargando = true;
      estado.error = null;
      estado.resultados = null;
    }),
    mutableOn(
      fromNuevosLanzamientos.buscarNuevosLanzamintosExito,
      (estado, action) => {
        estado.cargado = true;
        estado.cargando = false;
        estado.resultados = action.payload;
      }
    ),
    mutableOn(
      fromNuevosLanzamientos.buscarNuevosLanzamientosError,
      (estado, action) => {
        estado.cargando = false;
        estado.error = action.error;
      }
    )
  )(estado, action);
}

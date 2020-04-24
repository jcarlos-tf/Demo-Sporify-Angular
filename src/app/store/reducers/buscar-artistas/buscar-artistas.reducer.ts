/* import { Artistas } from "src/app/types/buscar-artistas";
import { createReducer, Action } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import * as fromBuscarArtistas from "../../actions/buscar-artistas/buscar-artistas.actions";

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: any;
  resultados: Artistas;
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
    mutableOn(fromBuscarArtistas.buscarArtistas, (estado) => {
      estado.cargado = false;
      estado.cargando = true;
      estado.error = null;
      estado.resultados = null;
    }),
    mutableOn(fromBuscarArtistas.buscarArtistasExito, (estado, action) => {
      estado.cargado = true;
      estado.cargando = false;
      estado.resultados = action.payload;
    }),
    mutableOn(fromBuscarArtistas.buscarArtistasError, (estado, action) => {
      estado.cargando = false;
      estado.error = action.error;
    })
  )(estado, action);
}
 */

import { Artistas } from "src/app/types/buscar-artistas";
import { createReducer, Action } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import * as fromBuscarArtistas from "../../actions/buscar-artistas/buscar-artistas.actions";

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: any;
  resultados: Artistas;
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
    mutableOn(fromBuscarArtistas.buscarArtistas, (estado) => {
      estado.cargado = false;
      estado.cargando = true;
      estado.error = null;
      estado.resultados = null;
    }),
    mutableOn(fromBuscarArtistas.buscarArtistasExito, (estado, action) => {
      estado.cargado = true;
      estado.cargando = false;
      estado.resultados = action.payload;
    }),
    mutableOn(fromBuscarArtistas.buscarArtistasError, (estado, action) => {
      estado.cargando = false;
      estado.error = action.error;
    })
  )(estado, action);
}

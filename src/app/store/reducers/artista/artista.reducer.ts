/* import { error } from "../../../types/nuevos-lanzamientos/nuevos-lanzamientos";
import {
  RespuestaConseguirArtista,
  RespuestaArtista,
  externalUrls,
} from "../../../types/artista/artista";
import { Action, createReducer } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import * as fromConseguirArtista from "../../actions/artista/artista.actions";

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: error;
  resultados: externalUrls;
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
    mutableOn(fromConseguirArtista.conseguirArtista, (estado) => {
      estado.cargado = false;
      estado.cargando = true;
      estado.error = null;
      estado.resultados = null;
    }),
    mutableOn(fromConseguirArtista.conseguirArtistaExito, (estado, action) => {
      estado.cargado = true;
      estado.cargando = false;
      estado.resultados = action.payload;
    }),
    mutableOn(fromConseguirArtista.conseguirArtistaError, (estado, action) => {
      estado.cargando = false;
      estado.error = action.error;
    })
  )(estado, action);
}
 */
import { Action, createReducer } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import { RespuestaConseguirArtista } from "src/app/types/artista/artista";
import { error } from "src/app/types/buscar-artistas";
import * as fromConseguirArtista from "../../actions/artista/artista.actions";

export type State = {
  cargado: boolean;
  cargando: boolean;
  error: error;
  resultados: RespuestaConseguirArtista;
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
    mutableOn(fromConseguirArtista.conseguirArtista, (estado) => {
      estado.cargado = false;
      estado.cargando = true;
      estado.error = null;
      estado.resultados = null;
    }),
    mutableOn(fromConseguirArtista.conseguirArtistaExito, (estado, action) => {
      estado.cargado = true;
      estado.cargando = false;
      estado.resultados = action.payload;
    }),
    mutableOn(fromConseguirArtista.conseguirArtistaError, (estado, action) => {
      estado.cargando = false;
      estado.error = action.error;
    })
  )(estado, action);
}

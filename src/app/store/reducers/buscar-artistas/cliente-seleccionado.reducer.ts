import { Action, createReducer } from "@ngrx/store";
import { mutableOn } from "ngrx-etc";
import * as fromClienteSeleccionado from "../../actions/artista-seleccionado.actions";
import * as fromCliente from "../../actions/buscar-artistas/buscar-artistas.actions";

const estadoInicial: string = null;

export function reducer(estado: string, accion: Action) {
  return createReducer(
    estadoInicial,
    mutableOn(fromCliente.buscarArtistas, () => null),
    mutableOn(fromClienteSeleccionado.seleccionarArtista, (estado, accion) => {
      return accion.payload;
    })
  )(estado, accion);
}

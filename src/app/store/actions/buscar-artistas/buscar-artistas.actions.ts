import { createAction, props } from "@ngrx/store";
import { Artistas, error } from "../../../types/buscar-artistas";

export const buscarArtistas = createAction(
  "[buscarArtistas] Buscar Nuevos buscarArtistas",
  props<{ payload: string }>()
);

export const buscarArtistasExito = createAction(
  "[buscarArtistas] Busqueda Nuevos buscarArtistas",
  props<{ payload: Artistas }>()
);

export const buscarArtistasError = createAction(
  "[buscarArtistas] Busqueda Nuevos buscarArtistas Error",
  props<{ error: error }>()
);

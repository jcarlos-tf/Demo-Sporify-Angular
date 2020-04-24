/* import { createAction, props } from "@ngrx/store";
import { Artistas } from "src/app/types/buscar-artistas";

export const buscarArtistas = createAction("[buscarArtistas] Buscar Artistas");

export const buscarArtistasExito = createAction(
  "[buscarArtistas] Buscar Artistas",
  props<{ payload: Artistas }>()
);

export const buscarArtistasError = createAction(
  "[buscarArtistas] Buscar Artistas",
  props<{ error: any }>()
);
 */

import { createAction, props } from "@ngrx/store";
import { Artistas } from "../../../types/buscar-artistas";

export const buscarArtistas = createAction(
  "[buscarArtistas] Buscar Nuevos buscarArtistas",
  props<{ termino: string }>()
);

export const buscarArtistasExito = createAction(
  "[buscarArtistas] Busqueda Nuevos buscarArtistas",
  props<{ payload: Artistas }>()
);

export const buscarArtistasError = createAction(
  "[buscarArtistas] Busqueda Nuevos buscarArtistas Error",
  props<{ error: any }>()
);

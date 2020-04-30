/* import { createAction, props } from "@ngrx/store";
import { externalUrls } from "../../../types/artista/artista";
import { error } from "../../../types/nuevos-lanzamientos/nuevos-lanzamientos";

export const conseguirArtista = createAction(
  "[Artista] conseguir artista",
  props<{ id: string }>()
);

export const conseguirArtistaExito = createAction(
  "[Artista] conseguir artista",
  props<{ payload: externalUrls }>()
);

export const conseguirArtistaError = createAction(
  "[Artista] conseguir artista",
  props<{ error: error }>()
);
 */
import { createAction, props } from "@ngrx/store";
import {
  externalUrls,
  RespuestaConseguirArtista,
} from "../../../types/artista/artista";
import { error } from "src/app/types/nuevos-lanzamientos/nuevos-lanzamientos";

export const conseguirArtista = createAction(
  "[conseguirArtista] Buscar Nuevos conseguirArtista",
  props<{ id: string }>()
);

export const conseguirArtistaExito = createAction(
  "[conseguirArtista] Busqueda Nuevos conseguirArtista",
  props<{ payload: RespuestaConseguirArtista }>()
);

export const conseguirArtistaError = createAction(
  "[conseguirArtista] Busqueda Nuevos conseguirArtista Error",
  props<{ error: error }>()
);

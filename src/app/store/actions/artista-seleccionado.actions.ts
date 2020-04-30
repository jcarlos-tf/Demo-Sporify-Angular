import { createAction, props } from "@ngrx/store";

export const seleccionarArtista = createAction(
  "[seleccionarArtista] Seleccionar seleccionarArtista",
  props<{ payload: string }>()
);

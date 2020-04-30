import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ConseguirArtistaApi } from "src/app/api/conseguir-artista.api";
import {
  conseguirArtista,
  conseguirArtistaError,
  conseguirArtistaExito,
} from "../../actions/artista/artista.actions";
@Injectable()
export class ConseguirArtistaEffects {
  conseguirArtista$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(conseguirArtista),
      switchMap(({ id }) => {
        return this.busquedaApi
          .getConseguirArista({
            id: id,
          })
          .pipe(
            map((artista) => conseguirArtistaExito({ payload: artista })),
            catchError(({ error }) => of(conseguirArtistaError({ error })))
          );
      })
    )
  );

  constructor(
    private acciones$: Actions,
    private busquedaApi: ConseguirArtistaApi
  ) {}
}

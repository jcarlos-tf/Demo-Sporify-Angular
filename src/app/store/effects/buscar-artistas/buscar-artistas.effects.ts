import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { BuscarArtistasApi } from "../../../api/buscar-artistas.api";
import { seleccionarArtista } from "../../actions/artista-seleccionado.actions";
import {
  buscarArtistas,
  buscarArtistasError,
  buscarArtistasExito,
} from "../../actions/buscar-artistas/buscar-artistas.actions";

@Injectable()
export class BuscarArtistasEffects {
  buscarBeneficiariosPorCliente$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(buscarArtistas),
      switchMap(({ payload }) => {
        return this.busquedaAPI
          .getBuscarAristas({
            termino: payload,
          })
          .pipe(
            map((albums) => buscarArtistasExito({ payload: albums })),
            /*  catchError((error: any) => {
              return of(buscarArtistasError({ error }));
            }) */
            catchError(({ error }) => of(buscarArtistasError({ error })))
          );
      })
    )
  );

  /* buscarBeneficiariosDeClienteSeleccionado$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(seleccionarArtista),
      map(({ payload }) => buscarArtistas({ payload }))
    )
  ); */

  navegarHaciaRz$ = createEffect(
    () =>
      this.acciones$.pipe(
        ofType(seleccionarArtista),
        tap(({ payload: id }) => {
          this.router.navigate(["/app/buscar/artista"], {
            queryParams: {
              id,
            },
          });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private acciones$: Actions,
    private busquedaAPI: BuscarArtistasApi,
    private router: Router
  ) {}
}

import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { BuscarArtistasApi } from "../../../api/buscar-artistas.api";
import {
  buscarArtistasError,
  buscarArtistasExito,
  buscarArtistas,
} from "../../actions/buscar-artistas/buscar-artistas.actions";
import { switchMap, catchError, map } from "rxjs/operators";
import { of } from "rxjs";

/* @Injectable()
export class BuscarArtistasEffects {
  buscarArtistas$ = createEffect(() =>
    this.acctiones$.pipe(
      ofType(buscarArtistas),
      switchMap(() => {
        return this.busquedaApi.getBuscarAristas().pipe(
          map((artistas) => buscarArtistasExito({ payload: artistas })),
          catchError((error: any) => {
            return of(buscarbuscarArtistasArtistasError({ error }));
          })
        );
      })
    )
  );

  constructor(
    private acctiones$: Actions,
    private busquedaApi: BuscarArtistasApi
  ) {}
} */

@Injectable()
export class BuscarArtistasEffects {
  buscarBeneficiariosPorCliente$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(buscarArtistas),
      switchMap(({ termino }) => {
        return this.busquedaAPI
          .getBuscarAristas({
            termino: termino,
          })
          .pipe(
            map((albums) => buscarArtistasExito({ payload: albums })),
            catchError((error: any) => {
              return of(buscarArtistasError({ error }));
            })
          );
      })
    )
  );

  constructor(
    private acciones$: Actions,
    private busquedaAPI: BuscarArtistasApi
  ) {}
}

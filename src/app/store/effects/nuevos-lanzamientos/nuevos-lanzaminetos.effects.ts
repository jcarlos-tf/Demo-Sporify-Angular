import { createEffect, ofType, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { NuevosLanzamientosApi } from "../../../api/nuevos-lanzamientos.api";
import { Router } from "@angular/router";
import {
  buscarNuevosLanzamientos,
  buscarNuevosLanzamintosExito,
  buscarNuevosLanzamientosError,
} from "../../actions/nuevos-lanzamientos/nuevos-lanzamientos.actions";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

@Injectable()
export class NuevosLanzamientosEffects {
  buscarBeneficiariosPorCliente$ = createEffect(() =>
    this.acciones$.pipe(
      ofType(buscarNuevosLanzamientos),
      switchMap(() => {
        return this.busquedaAPI.getNuevosLanzamientos().pipe(
          map((albums) => buscarNuevosLanzamintosExito({ payload: albums })),
          catchError((error: any) => {
            return of(buscarNuevosLanzamientosError({ error }));
          })
        );
      })
    )
  );

  constructor(
    private acciones$: Actions,
    private busquedaAPI: NuevosLanzamientosApi
  ) {}
}

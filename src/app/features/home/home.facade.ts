import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { buscarNuevosLanzamientos } from "../../store/actions/nuevos-lanzamientos/nuevos-lanzamientos.actions";
import {
  selectCargadoNuevosLanzamientos,
  selectCargandoNuevosLanzamientos,
  selectLanzamientosError,
  selectLanzamientosResultados,
} from "../../store/selectors/nuevos-lanzamientos.selectors";

@Injectable()
export class busquedaNuevosLanzamientosFacade {
  albums$ = this.store.pipe(select(selectLanzamientosResultados));
  cargado$ = this.store.pipe(select(selectCargadoNuevosLanzamientos));
  cargando$ = this.store.pipe(select(selectCargandoNuevosLanzamientos));
  error$ = this.store.pipe(select(selectLanzamientosError));

  constructor(private store: Store) {}

  buscarNLanzameintos() {
    this.store.dispatch(buscarNuevosLanzamientos());
  }
}

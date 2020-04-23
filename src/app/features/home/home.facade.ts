import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { buscarNuevosLanzamientos } from "../../store/actions/nuevos-lanzamientos/nuevos-lanzamientos.actions";
import { Observable } from "rxjs";
import { selectQueryParams } from "src/app/store/reducers";
import { map } from "rxjs/operators";
import { selectLanzamientosResultados } from "../../store/selectors/nuevos-lanzamientos.selectors";

@Injectable()
export class busquedaNuevosLanzamientosFacade {
  albums$ = this.store.pipe(select(selectLanzamientosResultados));

  constructor(private store: Store) {}

  buscarNLanzameintos() {
    this.store.dispatch(buscarNuevosLanzamientos());
  }
}

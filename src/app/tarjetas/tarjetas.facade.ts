import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { seleccionarArtista } from "../store/actions/artista-seleccionado.actions";

@Injectable()
export class TarjetaFacade {
  constructor(private store: Store) {}

  seleccionarArtista(id: string) {
    this.store.dispatch(seleccionarArtista({ payload: id }));
  }
}

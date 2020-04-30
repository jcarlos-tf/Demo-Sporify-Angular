import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  selectBuscarArtistasResultados,
  selectCargandoBuscarArtistas,
  selecCargadoBuscarArtistas,
} from "../../store/selectors/buscar-artistas/buscar-artistas.selectors";
import { buscarArtistas } from "src/app/store/actions/buscar-artistas/buscar-artistas.actions";

@Injectable()
export class buscaraArtistasFacade {
  artistas$ = this.store.pipe(select(selectBuscarArtistasResultados));
  cargado$ = this.store.pipe(select(selecCargadoBuscarArtistas));
  cargando$ = this.store.pipe(select(selectCargandoBuscarArtistas));

  constructor(private store: Store) {}

  buscarArtistasfacade(payload: string) {
    this.store.dispatch(buscarArtistas({ payload }));
  }
}

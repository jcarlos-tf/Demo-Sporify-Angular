import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectBuscarArtistasResultados } from "../../store/selectors/buscar-artistas/buscar-artistas.selectors";
import { buscarArtistas } from "src/app/store/actions/buscar-artistas/buscar-artistas.actions";

@Injectable()
export class buscaraArtistasFacade {
  artistas$ = this.store.pipe(select(selectBuscarArtistasResultados));

  constructor(private store: Store) {}

  buscarArtistasfacade(termino: string) {
    this.store.dispatch(buscarArtistas({ termino }));
  }
}

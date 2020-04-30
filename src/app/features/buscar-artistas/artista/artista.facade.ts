import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import {
  selectConseguirArtistaResultados,
  selecCargadoConseguirArtista,
  selectCargandoConseguirArtista,
  selectConseguirArtistaError,
} from "../../../store/selectors/artista/artista.selectors";
import { conseguirArtista } from "../../../store/actions/artista/artista.actions";
import { BuscarArtistasFormValue } from "src/app/types/buscar-artistas";
import { selectQueryParams } from "src/app/store/reducers";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class conseguirArtistaFacade {
  idBuscarArtistasFormValue$: Observable<
    BuscarArtistasFormValue
  > = this.store.pipe(
    select(selectQueryParams),
    map(
      ({ id }): BuscarArtistasFormValue => {
        return {
          id: id,
        };
      }
    )
  );

  artista$ = this.store.pipe(select(selectConseguirArtistaResultados));
  cargado$ = this.store.pipe(select(selecCargadoConseguirArtista));
  cargando$ = this.store.pipe(select(selectCargandoConseguirArtista));
  error$ = this.store.pipe(select(selectConseguirArtistaError));

  constructor(private store: Store) {}

  conseguirArtista(id: string) {
    this.store.dispatch(conseguirArtista({ id }));
  }
}

import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from "@angular/core";
import { conseguirArtistaFacade } from "./artista.facade";
import { Observable, Subscription } from "rxjs";
import { RespuestaConseguirArtista } from "../../../types/artista/artista";

@Component({
  selector: "app-artista",
  templateUrl: "./artista.component.html",
  styleUrls: ["./artista.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [conseguirArtistaFacade],
})
export class ArtistaComponent implements OnInit, OnDestroy {
  idValue4 = this.conseguirArtistaFacade.idBuscarArtistasFormValue$;
  cargado$ = this.conseguirArtistaFacade.cargado$;
  cargando$ = this.conseguirArtistaFacade.cargando$;
  error$ = this.conseguirArtistaFacade.error$;
  artista$ = this.conseguirArtistaFacade.artista$;

  subscription = new Subscription();

  constructor(private conseguirArtistaFacade: conseguirArtistaFacade) {}

  ngOnInit(): void {
    const subscription = this.conseguirArtistaFacade.idBuscarArtistasFormValue$.subscribe(
      (res) => {
        console.log("datos" + res.id);
        this.conseguirArtistaFacade.conseguirArtista(res.id);
      }
    );
    // this.conseguirArtista("7q6zjWaLw8bN5nYiBWjrus");
    // this.conseguirArtistaFacade.artista$;
    this.subscription.add(subscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  conseguirArtista(id: string) {
    this.conseguirArtistaFacade.conseguirArtista(id);
  }
}

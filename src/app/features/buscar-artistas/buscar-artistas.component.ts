import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { buscaraArtistasFacade } from "./buscar-artistas.facade";

@Component({
  selector: "app-buscar-artistas",
  templateUrl: "./buscar-artistas.component.html",
  styleUrls: ["./buscar-artistas.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [buscaraArtistasFacade],
})
export class BuscarArtistasComponent implements OnInit {
  artistas$ = this.buscaraArtistasFacade.artistas$;

  constructor(private buscaraArtistasFacade: buscaraArtistasFacade) {}

  ngOnInit() {}

  buscar(termino: string) {
    console.log(termino);
  }

  buscarArtistas(termino: string) {
    if (termino.length <= 0) {
      console.log("no puede ser vacio");
    } else {
      console.log(termino);
      this.buscaraArtistasFacade.buscarArtistasfacade(termino);
    }
  }
}

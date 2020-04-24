import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuscarArtistasComponent } from "./buscar-artistas.component";
import { TarjetasModule } from "../../tarjetas/tarjetas.module";

@NgModule({
  declarations: [BuscarArtistasComponent],
  exports: [BuscarArtistasComponent],
  imports: [CommonModule, TarjetasModule],
})
export class BuscarTarjetasModule {}

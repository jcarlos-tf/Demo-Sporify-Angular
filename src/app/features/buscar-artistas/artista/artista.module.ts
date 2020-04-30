import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArtistaComponent } from "./artista.component";

@NgModule({
  declarations: [ArtistaComponent],
  exports: [ArtistaComponent],
  imports: [CommonModule],
})
export class ArtistaModule {}

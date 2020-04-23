import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomePage } from "./home/home.page";
import { NuevosLanzamientosApi } from "../api/nuevos-lanzamientos.api";
import { AlbumsComponent } from './albums/albums.component';
import { BuscarArtistasComponent } from './buscar-artistas/buscar-artistas.component';

@NgModule({
  declarations: [HomePage, AlbumsComponent, BuscarArtistasComponent],
  imports: [CommonModule],
  exports: [HomePage],
})
export class HomeModule {}

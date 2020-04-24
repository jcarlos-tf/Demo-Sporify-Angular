import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarArtistasComponent } from "./features/buscar-artistas/buscar-artistas.component";
import { BuscarTarjetasModule } from "./features/buscar-artistas/buscar-artistas.module";
import { HomeModule } from "./features/home.module";
import { HomePage } from "./features/home/home.page";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    component: HomePage,
  },
  {
    path: "search",
    component: BuscarArtistasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, BuscarTarjetasModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

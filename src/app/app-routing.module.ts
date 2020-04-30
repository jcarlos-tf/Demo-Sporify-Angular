import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BuscarArtistasComponent } from "./features/buscar-artistas/buscar-artistas.component";
import { BuscarTarjetasModule } from "./features/buscar-artistas/buscar-artistas.module";
import { HomeModule } from "./features/home.module";
import { HomePage } from "./features/home/home.page";
import { ArtistaModule } from "./features/buscar-artistas/artista/artista.module";
import { ArtistaComponent } from "./features/buscar-artistas/artista/artista.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout.module";
import { LayoutComponent } from "./layout.component";

/* const routes: Routes = [
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
    children: [
      {
        path: "artista",
        component: ArtistaComponent,
      },
    ],
  },
]; */

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "app",
  },
  {
    path: "app",
    component: LayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "home",
      },
      {
        path: "home",
        children: [
          {
            path: "",
            pathMatch: "full",
            component: HomePage,
          },
        ],
      },
      {
        path: "buscar",
        children: [
          {
            path: "",
            pathMatch: "full",
            component: BuscarArtistasComponent,
          },
          {
            path: "artista",
            component: ArtistaComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule,
    HomeModule,
    BuscarTarjetasModule,
    ArtistaModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

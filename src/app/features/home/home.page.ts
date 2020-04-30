import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { NuevosLanzamientosApi } from "../../api/nuevos-lanzamientos.api";
import { busquedaNuevosLanzamientosFacade } from "./home.facade";
import { Albums } from "src/app/types/nuevos-lanzamientos/nuevos-lanzamientos";

@Component({
  selector: "home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [busquedaNuevosLanzamientosFacade],
})
export class HomePage implements OnInit {
  cargado$ = this.busquedaNuevosLanzamientosFacade.cargado$;
  cargando$ = this.busquedaNuevosLanzamientosFacade.cargando$;
  nuevasCanciones$ = this.busquedaNuevosLanzamientosFacade.albums$;
  errorNuevasCanciones$ = this.busquedaNuevosLanzamientosFacade.error$;

  constructor(
    private busquedaNuevosLanzamientosFacade: busquedaNuevosLanzamientosFacade
  ) {}

  ngOnInit(): void {
    this.buscarnuevos();
  }

  buscarnuevos() {
    this.busquedaNuevosLanzamientosFacade.buscarNLanzameintos();
  }
}

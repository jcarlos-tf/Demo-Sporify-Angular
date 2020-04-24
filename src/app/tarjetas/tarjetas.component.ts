import { Component, OnInit, Input } from "@angular/core";
import { Artistas } from "../types/buscar-artistas";

@Component({
  selector: "tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.sass"],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any;

  constructor() {}

  ngOnInit(): void {}
}

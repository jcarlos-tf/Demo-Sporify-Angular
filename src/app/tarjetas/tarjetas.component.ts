import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Artistas } from "../types/buscar-artistas";
import { TarjetaFacade } from "./tarjetas.facade";

@Component({
  selector: "tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TarjetaFacade],
})
export class TarjetasComponent implements OnInit {
  @Input() items: any;
  @Input() cargado: boolean;
  @Input() cargando: boolean;
  @Input() error: any;
  @Input() esArtista: boolean;
  // cargando: boolean = false;
  @Output() seleccionar = new EventEmitter<string>();

  constructor(private selectArtista: TarjetaFacade) {}

  ngOnInit(): void {
    console.log(this.error);
    console.log(this.cargado);
    console.log(this.cargando);
  }

  seleccionarCliente(id: string) {
    this.seleccionar.emit(id);
    console.log(id);
  }

  seleccionarArtista(id: string) {
    if (this.esArtista) {
      this.selectArtista.seleccionarArtista(id);
    }
  }
}

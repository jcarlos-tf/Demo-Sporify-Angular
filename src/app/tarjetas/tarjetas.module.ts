import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarjetasComponent } from "./tarjetas.component";
import { NoimagePipe } from "../pipes/noimage.pipe";

@NgModule({
  declarations: [TarjetasComponent, NoimagePipe],
  imports: [CommonModule],
  exports: [TarjetasComponent],
})
export class TarjetasModule {}

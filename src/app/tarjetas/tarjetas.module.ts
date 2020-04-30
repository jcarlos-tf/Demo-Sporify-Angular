import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarjetasComponent } from "./tarjetas.component";
import { NoimagePipe } from "../pipes/noimage.pipe";
import { LoadingModule } from "../loading/loading.module";

@NgModule({
  declarations: [TarjetasComponent, NoimagePipe],
  imports: [CommonModule, LoadingModule],
  exports: [TarjetasComponent],
})
export class TarjetasModule {}

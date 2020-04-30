import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingModule } from "../loading/loading.module";
import { TarjetasModule } from "../tarjetas/tarjetas.module";
import { HomePage } from "./home/home.page";

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, TarjetasModule, LoadingModule],
  exports: [HomePage],
})
export class HomeModule {}

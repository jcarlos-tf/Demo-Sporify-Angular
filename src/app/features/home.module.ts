import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TarjetasModule } from "../tarjetas/tarjetas.module";
import { HomePage } from "./home/home.page";

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, TarjetasModule],
  exports: [HomePage],
})
export class HomeModule {}

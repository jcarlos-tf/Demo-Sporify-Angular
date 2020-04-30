import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { NavbarModule } from "./navbar/navbar.module";
import { RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  imports: [CommonModule, RouterModule, NavbarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}

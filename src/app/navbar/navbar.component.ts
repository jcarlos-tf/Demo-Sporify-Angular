import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {}

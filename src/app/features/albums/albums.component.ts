import { Component, OnInit, Input } from "@angular/core";
import { Albums } from "src/app/types/nuevos-lanzamientos/nuevos-lanzamientos";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.sass"],
})
export class AlbumsComponent implements OnInit {
  @Input() albums: Albums;

  constructor() {}

  ngOnInit(): void {}
}

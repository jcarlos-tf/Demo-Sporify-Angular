import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {
  Albums,
  RespuestaBuscarNuvosLanzamientos,
} from "../types/nuevos-lanzamientos/nuevos-lanzamientos";

@Injectable({
  providedIn: "root",
})
export class NuevosLanzamientosApi {
  private url = `${environment.endpoint}/v1/`;

  constructor(private http: HttpClient) {}

  getNuevosLanzamientos(): Observable<Albums> {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAZAL70Z0FyHMueZZVePpmPr4T9bpxVgkxylKCGQmUU9V69Kix7fxX8APAiTPfdaHCe-AkBWgFPNldDcI0",
    });

    /* return this.http
      .get(this.url + "browse/new-releases", { headers })
      .subscribe((data) => {
        console.log(data);
      }); */
    return this.http.get(this.url + "browse/new-releases", { headers }).pipe(
      map((respuesta: RespuestaBuscarNuvosLanzamientos) => {
        return respuesta.albums;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}

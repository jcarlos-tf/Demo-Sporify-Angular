import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {
  Artistas,
  RespuestaBuscarArtistas,
  items,
} from "../types/buscar-artistas";
import { environment } from "src/environments/environment";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BuscarArtistasApi {
  private url = `${environment.endpoint}/v1/`;
  constructor(private http: HttpClient) {}
  //   https://api.spotify.com/v1/search?q=ed%20sheerang&type=artist&limit=15
  getBuscarAristas(payload: { termino: string }): Observable<Artistas> {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAIa3EJNn7MgXj1sjOZwigrkrsKl0-3048VONYUoIG7BzhplI-fZTS_dCwHWE-5PjPQhSevpbrsdG5x-RM",
    });
    // https://api.spotify.com/v1/search?q=metalica&type=artist&limit=15
    return this.http
      .get(this.url + `search?q=${payload.termino}&type=artist&limit=15`, {
        headers,
      })
      .pipe(
        map((respuesta: RespuestaBuscarArtistas) => {
          return respuesta.artists;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}

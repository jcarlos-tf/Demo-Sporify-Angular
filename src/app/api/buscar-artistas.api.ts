import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Artistas, RespuestaBuscarArtistas } from "../types/buscar-artistas";

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
        "Bearer BQCbcKoyBxUkIG1ouwWKpsH_iuUV634PTs4IXl4Q4_q_FEEFzqPjt5jnJPJBf5E99kYcH1dzQjQpbzHOiAE",
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

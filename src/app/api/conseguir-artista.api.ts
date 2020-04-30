import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { RespuestaConseguirArtista, data } from "../types/artista/artista";

@Injectable({
  providedIn: "root",
})
export class ConseguirArtistaApi {
  private url = `${environment.endpoint}/v1/`;
  constructor(private http: HttpClient) {}

  getConseguirArista(payload: {
    id: string;
  }): Observable<RespuestaConseguirArtista> {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQCbcKoyBxUkIG1ouwWKpsH_iuUV634PTs4IXl4Q4_q_FEEFzqPjt5jnJPJBf5E99kYcH1dzQjQpbzHOiAE",
    });

    return this.http
      .get(this.url + `artists/${payload.id}`, {
        headers,
      })
      .pipe(
        map((respuesta: RespuestaConseguirArtista) => {
          return respuesta;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}

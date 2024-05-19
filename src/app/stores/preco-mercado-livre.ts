import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrecoMercadoLivreModel } from "../models/preco-mercado-livre-model";

@Injectable({
  providedIn: 'root',
})
export class PrecoMercadoLivreStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/preco-mercado-livre/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  getByIdLivro(idLivro: number): Observable<PrecoMercadoLivreModel> {
    return this.http.get<any>(this.baseUrl + 'by-id-livro/' + idLivro, { headers: this.headers })
  }

}

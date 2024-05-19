import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrecoMagaluModel } from "../models/preco-magalu-model";

@Injectable({
  providedIn: 'root',
})
export class PrecoMagaluStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/preco-magalu/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  getByIdLivro(idLivro: number): Observable<PrecoMagaluModel> {
    return this.http.get<any>(this.baseUrl + 'by-id-livro/' + idLivro, { headers: this.headers })
  }

}

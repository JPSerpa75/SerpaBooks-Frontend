import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PrecoAmazonModel } from "../models/preco-amazon-model";

@Injectable({
  providedIn: 'root',
})
export class PrecoAmazonStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/preco-amazon/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  getByIdLivro(idLivro: number): Observable<PrecoAmazonModel> {
    return this.http.get<any>(this.baseUrl + 'by-id-livro/' + idLivro, { headers: this.headers })
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvaliacaoModel } from '../models/avaliacao-model';

@Injectable({
  providedIn: 'root',
})
export class AvaliacaoStore {
  private baseUrl = 'http://localhost:8080/serpabooks/api/avaliacao';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) {}

  getAllByIdInfoLivro(idInfoLivro: number): Observable<AvaliacaoModel[]> {
    return this.http.get<any>(
      this.baseUrl + '/by-id-info-livro/' + idInfoLivro,
      { headers: this.headers }
    );
  }

  insert(dto: AvaliacaoModel): Observable<AvaliacaoModel> {
    return this.http.post<any>(this.baseUrl, dto, { headers: this.headers });
  }
}

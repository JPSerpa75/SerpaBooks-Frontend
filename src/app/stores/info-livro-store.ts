import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterOptionsModel } from '../models/filter.options-model';
import { InfoLivroGridModel } from '../models/info-livro-grid-model';
import { InfoLivroModel } from '../models/info-livro-model';
import { InfoLivroUpdateModel } from '../models/info-livro-update-model';

@Injectable({
  providedIn: 'root',
})
export class InfoLivroStore {
  private baseUrl = 'http://localhost:8080/serpabooks/api/info-livro/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) {}

  search(options: FilterOptionsModel): Observable<InfoLivroGridModel> {
    return this.http.post<any>(this.baseUrl + 'search', options, {
      headers: this.headers,
    });
  }

  getById(idInfoLivro: number): Observable<InfoLivroModel> {
    return this.http.get<any>(this.baseUrl + idInfoLivro, {
      headers: this.headers,
    });
  }

  updateResumoAndSinopse(
    model: InfoLivroUpdateModel
  ): Observable<InfoLivroModel> {
    return this.http.post<any>(this.baseUrl + 'update-resumo-sinopse', model, {
      headers: this.headers,
    });
  }
}

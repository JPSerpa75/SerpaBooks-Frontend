import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AutorModel } from "../models/autor-model";

@Injectable({
  providedIn: 'root',
})
export class AutorStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/autor';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  getAll(): Observable<AutorModel[]> {
    return this.http.get<any>(this.baseUrl, { headers: this.headers })
  }


}

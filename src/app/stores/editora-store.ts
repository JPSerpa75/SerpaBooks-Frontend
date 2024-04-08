import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EditoraModel } from "../models/editora-model";

@Injectable({
  providedIn: 'root',
})
export class EditoraStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/editora';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  getAll(): Observable<EditoraModel[]> {
    return this.http.get<any>(this.baseUrl, { headers: this.headers })
  }


}

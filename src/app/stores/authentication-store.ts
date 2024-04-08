import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginResponseModel } from "../models/login-response-model";

@Injectable({
  providedIn: 'root',
})
export class AuthenticationStore {

  private baseUrl = 'http://localhost:8080/serpabooks/api/auth/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  constructor(private http: HttpClient) { }

  login(loginModel: any): Observable<LoginResponseModel> {
    return this.http.post<any>(this.baseUrl + 'login', loginModel, { headers: this.headers })
  }

  resetPassword(resetPassword: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'reset-password', resetPassword, { headers: this.headers })
  }

  newUser(newUser: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'cadastro', newUser, { headers: this.headers })
  }

}

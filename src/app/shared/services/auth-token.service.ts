import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenData } from '../models/token-data.model';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  decodedToken$!: Observable<TokenData>
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {}

  localStorage = this.document.defaultView?.localStorage

  getToken() {
    if(this.localStorage){
      return this.localStorage.getItem('token')
    }
    return null
  }

  getIdUsuario() {
     return this.decodePayloadJWT()?.decode.id
  }

  getNomeUsuario() {
     const name = this.decodePayloadJWT()?.decode.nome
     if (!name) return ''
     const splittedName = name.split(' ')

     return `${splittedName[0]} ${splittedName.length >= 2 ? splittedName.pop() : ''}`
  }

  logout() {
    if(this.localStorage){
      this.localStorage.removeItem('token')
      this.decodedToken$ = {} as Observable<TokenData>
    }
    return null
  }

  decodePayloadJWT() {
     const token = this.getToken()

     if (token) {
        const helper = new JwtHelperService()

        const decodedToken = helper.decodeToken(token)
        const expirationDate = helper.getTokenExpirationDate(token)
        const isExpired = helper.isTokenExpired(this.getToken())

        if (isExpired) {
           this.router.navigateByUrl('/')
           return null
        }
        this.decodedToken$ = of(decodedToken)
        return { decode: decodedToken, expire: expirationDate, isExpired: isExpired }
     } else {
        this.router.navigateByUrl('/')
        return null
     }
  }
}

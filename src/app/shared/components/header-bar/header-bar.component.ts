import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { AuthTokenService } from '../../services/auth-token.service';
import { TokenData } from '../../models/token-data.model';
import { FilterOptionsModel } from '../../../models/filter.options-model';
import { filterOptionsService } from '../../services/filter-options.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent implements OnInit {

  logado: boolean = true
  nomeUsuario: string | null = null

  textoChave!: string


  constructor(private authTokenService: AuthTokenService, private filterOptionsService: filterOptionsService){}

  ngOnInit(): void {
    this.logado = true
    this._validateToken()
  }

  logout(){
    this.logado = true
    this.authTokenService.logout()
    this._validateToken()
  }

  search(){
    let filter = {} as FilterOptionsModel
    filter.textoChave = this.textoChave
    this.filterOptionsService.setFilterOptions(filter)
  }

  private _validateToken(){
    if(this.authTokenService.decodePayloadJWT() != null && !<TokenData><unknown>this.authTokenService.decodePayloadJWT()!.isExpired){
      this.logado = !this.logado
      this.nomeUsuario = this.authTokenService.getNomeUsuario()
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationStore } from '../../../../stores/authentication-store';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {

  form = {} as FormGroup;
  visible = false;
  messageError: string = '';

  constructor(private formBuilder: FormBuilder, private route: Router, private authenticationStore: AuthenticationStore) { }

  ngOnInit(): void {
    this.visible = false;
    this.form = this.formBuilder.group({
      nomeUsuario: new FormControl(null, Validators.required),
      dataNascimentoUsuario: new FormControl(null, Validators.required),
      emailUsuario: new FormControl(null, [Validators.required, Validators.email]),
      novaSenha: new FormControl(null, Validators.required)
    });
  }


  redefinirSenha() {
    this.messageError = ''
    if(this.form.get('emailUsuario')?.errors?.['email']){
      this.messageError = 'E-mail informado não é válido!'
      return
    }else if (this.form.invalid) {
      this.messageError = 'Por Favor preencha todos os campos!'
      return;
    }

    this.authenticationStore.resetPassword(this.form.value).subscribe({
      next: (data: any) => {
        this._redirectTo()
      },
      error: (error: any) => {
        console.log(error)
        this.messageError = error.error
      }
    });
  }

  criarConta() {
    this.route.navigate(['/login/new-user'])
  }

  private _redirectTo() {
    this.route.navigate(['/login'])
  }

  changeVisibility() {
    this.visible = !this.visible;
  }

}

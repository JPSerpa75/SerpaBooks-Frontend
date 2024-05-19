import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './views/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { NewUserComponent } from './views/new-user/new-user.component';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { AuthenticationStore } from '../../stores/authentication-store';



@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthenticationStore
  ]
})
export class LoginModule { }

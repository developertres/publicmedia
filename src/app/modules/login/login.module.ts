import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from '../../components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
  ],
  declarations: [
    LoginComponent,
  ],
})

export class LoginModule { }

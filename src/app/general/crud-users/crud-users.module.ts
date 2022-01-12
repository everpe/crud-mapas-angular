import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsersRoutingModule } from './crud-users-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    CrudUsersRoutingModule
  ]
})
export class CrudUsersModule { }
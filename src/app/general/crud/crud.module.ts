import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUsersRoutingModule } from './crud-routing.module';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormComponent } from './form/form.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatSnackBarModule} from '@angular/material/snack-bar'
@NgModule({
  declarations: [
    PostsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    CrudUsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class CrudModule { }

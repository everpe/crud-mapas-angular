import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from '../form/form.component';
import { Post } from '../interfaces/post';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource!: MatTableDataSource<Post>;
  /** Groups of items to be displayed */
  paginationGroups = [];
  defaultPagingGroup!: number;
  startPagingIndex!: number;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns : string[] = [];

  constructor(private crudService: CrudService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  
  ngOnInit(): void {
    this.mostrarColumnas();
    this.cargarRegistros()
  }
  cargarRegistros() {
    this.crudService.getAllPosts().subscribe(
        (res) => {
          this.dataSource = new MatTableDataSource(res ? res : []);
          this.dataSource.paginator = this.paginator;
          this.sort?.sort(({}) as MatSortable);
          this.dataSource.sort = this.sort;
        },
        (err) => {
          console.log(err);
        }
      );
  }

  mostrarColumnas() {
    this.displayedColumns = [
     'title',
     'body',
     'userId',
     'acciones'
    ];
  }
  visualizar(row: Post){
    const dialogRef = this.dialog.open(FormComponent, {
      width: '450px',
      data: {viewMode: true, post: row},
    });
    // dialogRef.afterClosed().subscribe(result => {
     
    //   }
    // });
  }
  editar(row: Post){
    const dialogRef = this.dialog.open(FormComponent, {
      width: '450px',
      data: {editMode: true, post: row},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.valid){
        this.crudService.updatePost(result?.value as Post).subscribe(
          (res:any)=>{
            if(res){
               this.openSnackBar("Se ha actualizado el registro","Ok")
               this.cargarRegistros();
            }
          },(error:any)=>{
            console.log(error);
          }
        );
      }
    });
  }
  eliminar(row: Post){
    let result = window.confirm(`¿Desea eliminar el Post:   ${row.title}?`)
    if (result) {
      this.crudService.deletePost(row.id ?? 0).subscribe(
        (res:any)=>{
          if(res){
             this.openSnackBar("Se ha creado eliminado el registro","Ok")
             this.cargarRegistros();
          }
        },(error:any)=>{
          console.log(error);
        }
      );
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
  agregar(){
    const dialogRef = this.dialog.open(FormComponent, {
      width: '450px',
      data: {insertMode: true},
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result && result.valid){
        this.crudService.addPost(result?.value as Post).subscribe(
          (res:any)=>{
            if(res){
               this.openSnackBar("Se ha creado correctamente el registro","Ok")
               this.cargarRegistros();
            }
          },(error:any)=>{
            console.log(error);
          }
        );
      }
    });
  }
}


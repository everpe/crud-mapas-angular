import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  formInsertMode: boolean = false;
  formEditMode: boolean = false;
  formViewMode: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<FormComponent>,
  private formBuilder: FormBuilder,
) { }

  ngOnInit(): void {
    this.formInsertMode = this.data?.insertMode;
    this.formViewMode = this.data?.viewMode;
    this.formEditMode = this.data?.editMode;

    this.buildForm();
    this.form.patchValue(this.data?.post);

  }
  buildForm() {
    this.form = this.formBuilder.group({
      id:[""],
      title: ["",Validators.compose([
                  Validators.required,
                  Validators.maxLength(100)])],
      body: ["", Validators.compose([
        Validators.required,
        Validators.maxLength(500),
      ]),],
      userId:[1],
    });
    if(this.formViewMode){
      this.form.disable();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

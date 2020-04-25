import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { University } from '../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-university-modal',
  templateUrl: './university-modal.component.html',
  styleUrls: ['./university-modal.component.css']
})
export class UniversityModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UniversityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: University
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.data.title, [
        Validators.required,
        Validators.minLength(2),
      ]),
      name: new FormControl(this.data.name, [
        Validators.required
      ])
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close({...this.data, ...this.form.getRawValue()});
  }

  get title() {
    return this.form.get('title');
  }

  get name() {
    return this.form.get('name');
  }
}

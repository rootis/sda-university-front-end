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
    private dialogRef: MatDialogRef<UniversityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: University
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.data.title, [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    console.log(this.form.getRawValue());
  }

  get title() {
    return this.form.get('title');
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-university-modal',
  templateUrl: './university-modal.component.html',
  styleUrls: ['./university-modal.component.css']
})
export class UniversityModalComponent implements OnInit {

  private static readonly URL = '/api/universities';

  form: FormGroup;

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<UniversityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: University
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      code: new FormControl(this.data.code, [
        Validators.required,
        Validators.minLength(2)
      ]),
      title: new FormControl(this.data.title, [
        Validators.required
      ])
    });
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.api.post(UniversityModalComponent.URL, {...this.data, ...this.form.getRawValue()}).subscribe(
      (result: University) => this.dialogRef.close(result),
      err => this.api.setValidationResult(err, this.form)
    );
  }

  get code() {
    return this.form.get('code');
  }

  get title() {
    return this.form.get('title');
  }
}

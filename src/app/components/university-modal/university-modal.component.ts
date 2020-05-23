import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-university-modal',
  templateUrl: './university-modal.component.html',
  styleUrls: ['./university-modal.component.css']
})
export class UniversityModalComponent implements OnInit {

  form: FormGroup;

  constructor(
    private api: ApiService,
    public errorService: ErrorService,
    private dialogRef: MatDialogRef<UniversityModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: University
  ) { }

  ngOnInit(): void {
    this.errorService.init();
    this.form = new FormGroup({
      code: new FormControl(this.data.code, [
        Validators.required,
        Validators.minLength(2),
        this.errorService.validate('code')
      ]),
      title: new FormControl(this.data.title, [
        Validators.required
      ])
    });
  }

  cancel() {
    console.log(this.code.errors);
    // this.dialogRef.close();
  }

  save() {
    this.api.post('/api/universities', {...this.data, ...this.form.getRawValue()}).subscribe(this.dialogRef.close);
  }

  get code() {
    return this.form.get('code');
  }

  get title() {
    return this.form.get('title');
  }
}

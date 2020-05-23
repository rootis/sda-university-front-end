import { Injectable } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errors: { [key: string]: string };

  constructor() {
    this.init();
  }

  validate(key: string): ValidatorFn {
    return (): { [key: string]: any } | null => {
      console.log('aaa: ', this.errors[key]);
      return this.errors[key] ? {key: this.errors[key]} : null;
    };
  }

  init() {
    this.errors = {};
  }
}

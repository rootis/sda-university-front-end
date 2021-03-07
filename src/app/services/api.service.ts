import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup } from '@angular/forms';

import { TOKEN_KEY } from '../common/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly urlPrefix = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  setValidationResult({ status, error }: HttpErrorResponse, form: FormGroup) {
    if (status === 400 && error?.items) {
      for (const item of Object.keys(error.items)) {
        form.get(item).setErrors({
          error: error.items[item]
        });
      }
    } else {
      this.snackBar.open('System error', 'Try again', {
        duration: 4000,
        verticalPosition: 'top',
      });
    }
  }

  get(url: string) {
    return this.http.get(this.urlPrefix + url, this.getRequestOptions());
  }

  post(url: string, data: object) {
    return this.http.post(this.urlPrefix + url, data, this.getRequestOptions());
  }

  put(url: string, data: object) {
    return this.http.put(this.urlPrefix + url, data, this.getRequestOptions());
  }

  delete(url: string) {
    return this.http.delete(`${this.urlPrefix}${url}`, this.getRequestOptions());
  }

  private getRequestOptions() {
    const token = sessionStorage.getItem(TOKEN_KEY);

    const headers: {[key: string]: string} = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    };

    return {
      headers
    };
  }
}

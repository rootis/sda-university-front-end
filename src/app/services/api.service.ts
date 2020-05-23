import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TOKEN_KEY } from '../common/Constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private static readonly URL_PREFIX = 'http://127.0.0.1:8080';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(ApiService.URL_PREFIX + url, this.getRequestOptions());
  }

  post(url: string, data: object) {
    return this.http.post(ApiService.URL_PREFIX + url, data, this.getRequestOptions());
  }

  put(url: string, data: object) {
    return this.http.put(ApiService.URL_PREFIX + url, data, this.getRequestOptions());
  }

  delete(url: string) {
    return this.http.delete(`${ApiService.URL_PREFIX}${url}`);
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

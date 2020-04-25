import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly key = 'token';
  private token: string;

  redirectUrl: string;

  constructor(private api: ApiService) {
    this.token = sessionStorage.getItem(AuthService.key);
  }

  isLoggedIn() {
    return !!this.token;
  }

  login(user): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.api.post('/login', user).subscribe(
        ({token}: { token: string }) => {
          this.token = token;
          sessionStorage.setItem(AuthService.key, token);
          observer.next(true);
        });
    });
  }
}

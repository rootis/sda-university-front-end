import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ErrorService } from './services/error.service';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const errorService = this.injector.get(ErrorService);

    return next.handle(request).pipe(
      retry(0),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          errorService.errors = error.error.items;
          console.log(errorService.errors);
        }
        return throwError(error);
      })
    );
  }
}

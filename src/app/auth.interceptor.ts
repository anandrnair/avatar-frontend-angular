
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {environment} from '../environments/environment';

const API_URL = environment.apiUrl;


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  // intercept request and add token
  intercept(request: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
    // modify request
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${localStorage.getItem('userToken')}`}
    });

    console.log('----request----');

    console.log(request);

    console.log('--- end of request---');


    return next.handle(request).pipe(tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log(' all looks good');
            // http response status code
            console.log(event.status);
          }
        },
        error => {
          // http response status code
          console.log('----response----');
          console.error('status code:');
          console.error(error.status);
          console.error(error.message);
          console.log('--- end of response---');
        }));
  }
}

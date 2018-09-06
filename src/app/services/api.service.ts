import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {Http2ServerRequest} from 'http2';
import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';
import {Error} from '../models/error.interface';

const BASE_URL = environment.apiUrl;
const VERSION = 'v1';
@Injectable({providedIn: 'root'})
export class ApiService {
  readonly rootUrl = BASE_URL + VERSION + '/';

  constructor(private http: HttpClient) {}

  get(url): Observable<Response> {
    // Helper service to start ng2-slim-loading-bar progress bar
    // this.helperService.startLoader();
    return this.http.get(this.rootUrl + url)
        .tap(response => {
          return response;
        })
        .catch(this.handleError);
  }

  private handleError(error: Response|any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  post(url, postBody: any) {
    // this.helperService.startLoader();

    return this.http.post(this.rootUrl + url, postBody);
  }

  handleResponse(res: Response): any {
    // My API sends a new jwt access token with each request,
    // so store it in the local storage, replacing the old one.
    // this.refreshToken(res);
    const data = res.json();
    if (data.error) {
      const error: Error = data.error;
      throw error;
    } else {
      return data;
    }
  }

  // refreshToken(res: Response) {
  //   const token = res.headers.get(appVariables.accessTokenServer);
  //   if (token) {
  //     localStorage.setItem(appVariables.accessTokenLocalStorage, `${token}`);
  //   }
  // }
  /*
  delete(url, postBody: any) {
    this.helperService.startLoader();
    return this.http.delete(url).map((res: Response) => {
      return this.handleResponse(res);
    }).catch((error: Response) => Observable.throw(error))
      .finally(() => {
        this.helperService.stopLoader();
      });
  }
  put(url, putData) {
    this.helperService.startLoader();
    return this.http.put(url, putData).map((res: Response) => {
      return this.handleResponse(res);
    }).catch((error: Response) => Observable.throw(error))
      .finally(() => {
        this.helperService.stopLoader();
      });
  }


  upload(url: string, file: File) {
    const formData: FormData = new FormData();
    if (file) {
      formData.append('files', file, file.name);
    }
    this.helperService.addContentTypeHeader = false;
    return this.post(url, formData);
  }


  formUrlParam(url, data) {
    let queryString = '';
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (!queryString) {
          queryString = `?${key}=${data[key]}`;
        } else {
          queryString += `&${key}=${data[key]}`;
        }
      }
    }
    return url + queryString;
  }






  */
}

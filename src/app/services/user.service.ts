import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

// import 'rxjs/add/operator/map';
import {TokenResponse} from '../models/token';
import {User} from '../models/user.model';
import {ApiService} from '../services/api.service';

@Injectable()
export class UserService {
  readonly version = 'v1';
  readonly rootUrl = 'http://localhost:8000/api/' + this.version + '/';

  constructor(
      private http: HttpClient, private apiService: ApiService,
      private _toasterService: ToastrService) {}

  registerUser(user: User) {
    const body = {
      username: user.username,
      password: user.password,
      email: user.email,
      first_name: user.firstName,
      last_name: user.lastName,
      company: user.company
    };
    return this.http.post(this.rootUrl + 'user/register/', body);
  }

  userAuthentication(userName, password): Observable<any> {
    // const data = 'username=' + userName + '&password=' + password +
    // '&grant_type=client_credentials&client_id=clientid&client_secret=clientpass';
    const data = {
      username: userName,
      password: password,
      grant_type: 'password',
      client_id: 'clientid',
      client_secret: 'clientpass'
    };
    const reqHeader =
        new HttpHeaders({'Content-Type': 'application/x-www-urlencoded'});
    return this.apiService.post('user/login/', data);
    // return this.http.post(this.rootUrl + 'user/login/', data);
  }

  getUserClaims() {
    return this.http.get(this.rootUrl + '/api/GetUserClaims');
  }
}

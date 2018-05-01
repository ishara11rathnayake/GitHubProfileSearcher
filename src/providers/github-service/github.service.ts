// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../moks/user.moks'; 

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
  }

  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

}

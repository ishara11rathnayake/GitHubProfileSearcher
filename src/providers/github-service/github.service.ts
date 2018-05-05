// import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


import { User } from '../../models/user.interface';
import { USER_LIST } from '../../moks/user.moks'; 

import { Repository } from '../../models/repository.interface';
import { REPOSITORY_LIST } from '../../moks/repository.moks';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private baseUrl: string = "https://api.github.com/users";
  private reposUrl: string = "repos";

  constructor( private http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handaleError); 
  }

  getRepositoryInformation(username: string): Observable<Repository[]>{
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handaleError); 
  }

  mockGetRepositoryInformation(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name === username));
  }

  mockGetUserInformation(username: string): Observable<User>{
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  private handaleError(error: Response | any){
    return Observable.throw(error.json().error || "Server error.");
  }

  private extractData(response: Response){
    return response.json();
  }

  private logData(response: Response){
    console.log(response);
  }

}

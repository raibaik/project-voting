import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _users = new BehaviorSubject<any[]>([]);
  private _voting = new BehaviorSubject<any[]>([]);
  private _calon = new BehaviorSubject<any[]>([]);
  private _data= new BehaviorSubject<any[]>([]);


  // get users () {
  //   return this._users.asObservable();
  // }

  // get voting () {
  //   return this._voting.asObservable();
  // }


  // get calon () {
  //   return this._calon.asObservable();
  // }

  get data() {
    return this._data.asObservable();
  }

  constructor(
       private http: HttpClient
  ){}

  login(nim: any, password: any) {
    return this.http.post(environment.ApiURL + '/login',
    {
      nim : nim,
      password : password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe((res: any) => {
      this._data.next(res);    
      
  });
  }
}

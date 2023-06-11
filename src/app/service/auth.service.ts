import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- Import HttpClient
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _users = new BehaviorSubject<any[]>([]);
  private _voting = new BehaviorSubject<any[]>([]);
  private _calon = new BehaviorSubject<any[]>([]);
  //private _role = new BehaviorSubject<any[]>([]);

  //get role () {
    //return this._role.asObservable();
  //}

  get users () {
    return this._users.asObservable();
  }

  get voting () {
    return this._voting.asObservable();
  }

  get calon () {
    return this._calon.asObservable();
  }

  constructor(
       private http: HttpClient
  )
   {

   }

   private _data= new BehaviorSubject<any[]>([]);

   get data() {
     return this._data.asObservable();
   }


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
      //this._role.next(res.data.role);
      
      
  });
  }
}
  

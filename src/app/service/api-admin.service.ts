import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ApiAdminService {
  private _users = new BehaviorSubject<any[]>([]);


  get users() {
    return this._users.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  getListsCandidat() {
    return this.http.get(environment.ApiURL + '/admin/calons', {});
  }

  // getListUser() {
  //   return this.http.get(environment.ApiURL + '/admin/user', {
  //     headers: {
  //       'Authorization': 'Bearer ' + localStorage.getItem('token')
  //     }
  //   })
  //   .subscribe((resData: any) => {
  //     const users = [];
  //     for (const key in resData) {
  //       if (resData.hasOwnProperty(key)) {
  //         users.push({
  //           id: resData[key]._id,
  //           nama: resData[key].nama,
  //           nim: resData[key].nim,
  //           kelas: resData[key].kelas,
  //           prodi: resData[key].prodi,
  //           password: resData[key].password,
  //           role: resData[key].role,
  //           voting: resData[key].voting
  //         });
  //       }
  //     }
  //     this._users.next(users);
  //     console.log(users);
  //   });
  // }

  getListPeserta(nama: any, nim: any, kelas: any, prodi: any, password: any, role: any, voting: any) {
    return this.http.get(environment.ApiURL + '/admin/user');
  }
  
}
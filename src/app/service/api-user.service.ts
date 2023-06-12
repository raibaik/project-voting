import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- Import HttpClient
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(  
    private http: HttpClient
  ) {}

  CreateUser(form : any) {
    return this.http.post(environment.ApiURL + '/admin/user',
    {
      "nama" : form.nama,
      "nim" : form.nim,
      "kelas" : form.kelas,
      "prodi" : form.prodi,
      "password" : form.password,
      "role" : form.role,
      "voting" : form.voting
    },
    { responseType: 'json'}
    );
  }

  UpdateUser(id : any , form : any){
    return this.http.put(environment.ApiURL + '/admin/user/' + id,
      {
        "nama" : form.nama,
      "nim" : form.nim,
      "kelas" : form.kelas,
      "prodi" : form.prodi,
      "password" : form.password,
      "role" : form.role,
      "voting" : form.voting
      },
      { responseType: 'json'}
    );
  }

  DeleteUser(id : any) {
    return this.http.delete(environment.ApiURL + '/admin/user/' + id);
  }
}

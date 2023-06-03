import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http : HttpClient
  ) { }

  GetListUser(){
    return this.http.get(environment.ApiURL + '/mahasiswa/-NWNLZJJ_pjaH8qKJHRs.json' , {} );
  }

}

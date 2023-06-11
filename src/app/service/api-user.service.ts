import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <-- Import HttpClient

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(
    private http: HttpClient
  ) {
     
  }



}

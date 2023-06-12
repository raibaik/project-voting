import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUserService } from 'src/app/service/api-user.service';


@Component({
  selector: 'app-add-peserta',
  templateUrl: './add-peserta.page.html',
  styleUrls: ['./add-peserta.page.scss'],
})
export class AddPesertaPage  {

  form = {
    nama : "",
    nim : "",
    kelas : "",
    prodi : "",
    password : "",
    role : "",
    voting : ""
  }

  constructor(
    private apiUser: ApiUserService,
    private router: Router
    ) { }

  doAddPeserta() {
    // this.apiUser.CreateUser(this.form).subscribe( data => {
    //   const jsonResponse = JSON.parse(JSON.stringify(data));
    //   console.log(jsonResponse.id);
    //   console.log("Success =>"+JSON.stringify(data));
    // },
    // err => {
    //   console.error('gagal Create User =>', err.status);
    // });
    this.apiUser.CreateUser(this.form).subscribe( data => {
      const jsonResponse = JSON.parse(JSON.stringify(data));
      console.log(jsonResponse.id);
      console.log("Success =>"+JSON.stringify(data));
    },
    err => {
      console.error('gagal Create User =>', err.status);
    }
    );

  }

  goToDashboard() {
    this.router.navigate(['/dasboard']);
  }
    

  goToAdmin() {
    this.router.navigate(['/dasboard']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-peserta',
  templateUrl: './add-peserta.page.html',
  styleUrls: ['./add-peserta.page.scss'],
})
export class AddPesertaPage implements OnInit {

  form = {
    nama = '',
    nim = '',
    kelas = '',
    prodi = '',
    password = '',
    role = '',
    voting = '',
  }

  constructor(
    private router: Router
    ) { }

  doAddPeserta() {
    this.data
  }
    

  goToAdmin() {
    this.router.navigate(['/dasboard']);
  }

}

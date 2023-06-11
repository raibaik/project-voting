import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  data: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
      prodi: localStorage.getItem('prodi'),
      nim: localStorage.getItem('nim'),
      role: localStorage.getItem('role'),
      nama: localStorage.getItem('nama'),
      token: localStorage.getItem('token'),
      kelas: localStorage.getItem('kelas'),
    }
  }

  goToUser() {
    this.router.navigate(['/user']);
  }

  goToProfile() {
    this.router.navigate(['/profil']);
  }

}

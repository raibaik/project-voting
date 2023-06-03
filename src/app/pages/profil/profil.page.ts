import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage  {

  constructor(private router: Router) { }

  goToUser() {
    this.router.navigate(['/user']);
  }

  goToProfile() {
    this.router.navigate(['/profil']);
  }

}

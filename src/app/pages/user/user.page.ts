import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage  {
  constructor(private router: Router) { }

  goToProfile() {
    this.router.navigate(['/profil']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  goToVotings() {
    this.router.navigate(['/votings']);
  }

  goToResult() {
    this.router.navigate(['/result']);
  }
  
}

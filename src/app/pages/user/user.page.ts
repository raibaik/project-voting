import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage   implements OnInit {
  data : any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
      nim: localStorage.getItem('nim'),
      role: localStorage.getItem('role'),
      token: localStorage.getItem('token')
    }
  }

  goToProfile() {
    this.router.navigate(['/profil']);
  }

  logout() {
    localStorage.removeItem('nim');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  goToVotings() {
    this.router.navigate(['/votings']);
  }

  goToResult() {
    this.router.navigate(['/result']);
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit{
data: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
      nim: localStorage.getItem('nim'),
      role: localStorage.getItem('role'),
      token: localStorage.getItem('token')
    }
  }
    

  addKandidat() {
    this.router.navigate(['/add']);
  }
  editKandidat() {
    this.router.navigate(['/edit']);
  }
  deleteKandidat() {
    this.router.navigate(['/delete']);
  }
  AddPeserta() {
    this.router.navigate(['/add-peserta']);
  }

  doLogout() {
    localStorage.removeItem('nim');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }



}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage {

  constructor(private router: Router) { }

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

}

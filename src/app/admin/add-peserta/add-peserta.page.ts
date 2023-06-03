import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-peserta',
  templateUrl: './add-peserta.page.html',
  styleUrls: ['./add-peserta.page.scss'],
})
export class AddPesertaPage {

  constructor(private router: Router) { }

  goToAdmin() {
    this.router.navigate(['/dasboard']);
  }

}

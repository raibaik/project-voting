import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage {

  constructor(private router: Router) { }

  goToAdmin() {
    this.router.navigate(['dasboard']);
  }

}

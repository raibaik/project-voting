import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  constructor(private router: Router) { }

  goToAdmin() {
    this.router.navigate(['dasboard']);
  }

}

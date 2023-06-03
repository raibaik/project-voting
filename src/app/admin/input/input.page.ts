import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage{

  constructor(private router: Router) { }

  goToAdmin() {
    this.router.navigate(['dasboard']);
  }

}

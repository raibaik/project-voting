import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votings',
  templateUrl: './votings.page.html',
  styleUrls: ['./votings.page.scss'],
})
export class VotingsPage {

  constructor(private router: Router) { }

  goToUser() {
    this.router.navigate(['/user']);
  }

}

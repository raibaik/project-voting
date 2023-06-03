import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.page.html',
  styleUrls: ['./voting.page.scss'],
})
export class VotingPage {

  constructor(private router: Router) { }

  starApp() {
    this.router.navigate(['/login']);  
  }


}

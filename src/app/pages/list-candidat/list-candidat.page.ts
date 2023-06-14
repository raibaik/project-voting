import { Component, OnInit } from '@angular/core';
// import { ApiAdminService } from 'src/app/service/api-admin.service';
import { AuthService } from 'src/app/service/auth.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.page.html',
  styleUrls: ['./list-candidat.page.scss'],
})
export class ListCandidatPage implements OnInit {

  dataCandidat: any;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  // getDataAllCandidats() {
  //   this.authService.getListCandidat().subscribe((res: any) => {
  //     this.dataCandidat = res['calon'];
  //     console.log('Data User ===>' + JSON.stringify(res['calon']));
  //   });
  // }


  ngOnInit() {
 
  }


  updateCandidat() {
    this.router.navigate(['/update-candidat']);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/service/api-admin.service';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  fom = FormGroup;

  constructor(
    private router: Router,
    private apiAdmin: ApiAdminService

    ) { }

  ngOnInit() {
    this.form = new FormGroup<any>({
      nama: new FormControl(null, {
        updateOn: "blur"
      }),
      kelas: new FormControl(null, {
        updateOn: "blur"
      }),
      visi: new FormControl(null, {
        updateOn: "blur"
      }),
      misi: new FormControl(null, {
        updateOn: "blur"
      }),
    })

  }

  // goToAdmin() {
  //   this.router.navigate(['/dasboard']);
//   // }

// }

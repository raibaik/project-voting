import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiAdminService } from 'src/app/service/api-admin.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-peserta',
  templateUrl: './list-peserta.page.html',
  styleUrls: ['./list-peserta.page.scss'],
})
export class ListPesertaPage implements OnInit {

  dataPeserta = {
    nama: '',
    nim: '',
    kelas: '',
    prodi: '',
    password: '',
  }

  constructor(
    private router: Router,
    private apiAdminService: ApiAdminService
  ) { }

  updatePeserta() {
    this.router.navigate(['/update-peserta']);
  }
  
  getPeserta() {
    this.apiAdminService.getListPeserta().pipe(
      map((res: any) => res.data)
    ).subscribe((data: any[]) => {
      this.dataPeserta = data;
      console.log('Data Peserta ===> ', JSON.stringify(data));
    }
    
    setTimeout(() => {  
      this.getPeserta();
      console.log(dataPeserta);
    }, 1000);
  
  }
    
  ngOnInit() {
    this.getPeserta();
  }
}

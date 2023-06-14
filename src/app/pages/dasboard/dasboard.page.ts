import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.page.html',
  styleUrls: ['./dasboard.page.scss'],
})
export class DasboardPage implements OnInit{
data: any;
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController
    )
    {}
      

  ngOnInit() {
    this.data = {
      nama: localStorage.getItem('nama'),
      nim: localStorage.getItem('nim'),
      role: localStorage.getItem('role'),
      token: localStorage.getItem('token')
    }
  }
    
  doLogout() {
    localStorage.removeItem('nim');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('nama');
    localStorage.removeItem('kelas');
    localStorage.removeItem('prodi');
      this.router.navigate(['/login']);
    // this.loadingCtrl.create({keyboardClose: true, message: 'Logging out...', spinner: 'lines'})
    // .then(loadingEl => {
    //   loadingEl.present();
    //   localStorage.removeItem('nim');
    //   localStorage.removeItem('role');
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('nama');
    //   localStorage.removeItem('kelas');
    //   localStorage.removeItem('prodi');
    //   setTimeout(() => {
    //     loadingEl.dismiss();
    //     this.router.navigateByUrl('/login');
    //   }, 1500);
    // });
  }



}

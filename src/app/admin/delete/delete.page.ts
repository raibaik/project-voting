import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiUserService } from 'src/app/service/api-user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage {

  id : any;

  constructor(
    private router: Router,
    private apiUser: ApiUserService,
    private alert: AlertController
    ) { }

    private async presentAlert(title : any, message : any) {
      const alert = await this.alert.create({
        header: 'Sample Form',
        subHeader: title,
        message: message,
        buttons: ['OK']
      });

      await alert.present();
    }

  goToAdmin() {
    this.router.navigate(['dasboard']);
  }

  doDeletePeserta() {
    this.apiUser.CreateUser(this.id)
    .subscribe( data => {
      this.presentAlert('Berhasil' , 'Anda Sudah Delete Data User Dengan ID : '+ this.id);  
    },
    err => {
      console.error('Gagal Delete user ===> ', err.status);
      this.presentAlert('Gagal Delete user', 'Delete user gagal. Silahkan cek kembali jaringan internet anda.');
    });
  }

  submitWithValidateFormInput(){

    var doSubmitForm = true;

    if(this.id == null || this.id == ''){
      this.presentAlert('Peringatan' , 'Anda Belum Input Data ID');
      doSubmitForm = false;
    }

    if(doSubmitForm){
      this.doDeletePeserta();
    }

  }

  ngOnInit() {
  }
  

}

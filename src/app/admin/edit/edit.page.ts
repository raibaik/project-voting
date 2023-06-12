import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiUserService } from 'src/app/service/api-user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage {

  form = {
    nama : "",
    nim : "",
    kelas : "",
    prodi : "",
    password : "",
    role : "",
    voting : ""

  }

  id = 2;

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

    doPutUpdateUser(){
      this.apiUser.UpdateUser(this.id, this.form)
              .subscribe( data => {
                const jsonResponse = JSON.parse(JSON.stringify(data));
                console.log(jsonResponse.name);
                console.log("Success ==> "+ JSON.stringify(data)); 
                this.presentAlert('Berhasil' , 'Anda Sudah Update Data User Dengan Benar'); 
              },
              err => {
                console.error('Gagal Update user ===> ', err.status);
                this.presentAlert('Gagal Update user', 'Update user gagal. Silahkan cek kembali jaringan internet anda.');
              });
    }

    doSubmitWithValidateFormInput(){

      var doSubmitForm = true;
  
      if(this.form.nama == null || this.form.nama == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Nama Lengkap');
        doSubmitForm = false;
      }
  
      if(this.form.nim == null || this.form.nim == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }

      if(this.form.kelas == null || this.form.kelas == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }
      if(this.form.prodi == null || this.form.prodi == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }
      if(this.form.password == null || this.form.password == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }
      if(this.form.role == null || this.form.role == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }
      if(this.form.voting == null || this.form.voting == ''){
        this.presentAlert('Peringatan' , 'Anda Belum Input Data Pekerjaan');
        doSubmitForm = false;
      }
  
      if(doSubmitForm){
        this.doPutUpdateUser();
      }
  
    }

  

    
  

  goToAdmin() {
    this.router.navigate(['dasboard']);
  }

}

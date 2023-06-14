import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  form = {
    nim: '',
    password: ''  
  }

  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController

    )
    {
        // const role = localStorage.getItem('role');
        // if (role == 'admin') {
        //   this.router.navigateByUrl('/dasboard');
        // } else if (role == 'user') {
        //   this.router.navigateByUrl('/votings');
        // }
    }

  inputCheck() {
    if (this.form.nim == '' || this.form.password == '') {
      this.toastController.create({
        message: 'NIM dan Password tidak boleh kosong!',
        duration: 2000,
        color: 'danger'
      }).then(toast => toast.present());

      return false;
    } 

    return true;
  }

  startHome() {
    this.router.navigate(['/voting']);
  }

  doLogin() {
    const check = this.inputCheck();
    if (!check) {
      return;
    }

    let data: any;
    this.authService.login(this.form.nim, this.form.password);
    this.authService.data.subscribe((res: any) => data = res);

    if (data.data.role == 'admin') {
      this.router.navigateByUrl('/dasboard');
    } else if (data.data.role == 'user') {
      this.router.navigateByUrl('/user');
    }

    //data.role == 'admin' ? this.router.navigateByUrl('/user') : this.router.navigateByUrl('/dasboard');
    setTimeout(() => {
     localStorage.setItem('nim', data.data.nim);
     localStorage.setItem('role', data.data.role);
     localStorage.setItem('token', data.data.token);
      localStorage.setItem('nama', data.data.nama);
      localStorage.setItem('kelas', data.data.kelas);
      localStorage.setItem('prodi', data.data.prodi);
     console.log(data);
    

  }, 1500);
  }
  // doLogin() {
  //   const check = this.inputCheck();
  //   if (!check) {
  //     return;
  //   }
  
  //   this.authService.login(this.form.nim, this.form.password).subscribe(
  //     (data: any) => {
  //       if (data && data.data && data.data.role) {
  //         if (data.data.role === 'admin') {
  //           this.router.navigateByUrl('/dasboard');
  //         } else if (data.data.role === 'user') {
  //           this.router.navigateByUrl('/user');
  //         }
  
  //         localStorage.setItem('nim', data.data.nim);
  //         localStorage.setItem('role', data.data.role);
  //         localStorage.setItem('token', data.data.token);
  //         localStorage.setItem('nama', data.data.nama);
  //         localStorage.setItem('kelas', data.data.kelas);
  //         localStorage.setItem('prodi', data.data.prodi);
  //       } else {
  //         console.error('Invalid response data:', data);
  //         // Tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
  //       }
  //     },
  //     (error: any) => {
  //       console.error('Login error:', error);
  //       // Tampilkan pesan kesalahan atau lakukan tindakan lain sesuai kebutuhan
  //     }
  //   );
  // }
  

}  
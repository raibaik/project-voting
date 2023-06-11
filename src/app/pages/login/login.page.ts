import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';

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

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController

    ) {}

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
     localStorage.setItem('token', data.token);
     console.log(data);
    

  }, 1500);
  


  }
}  
// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.page.html',
//   styleUrls: ['./login.page.scss'],
// })
// export class LoginPage implements OnInit {
//   nim: string;
//   password: string;

//   constructor(private router: Router) { }

//   ngOnInit() {
//   }

//   login() {
//     // Tambahkan logika autentikasi sesuai kebutuhan Anda
//     // Contoh sederhana untuk pindah ke halaman beranda setelah login sukses
//     if (this.nim === 'admin' && this.password === 'password') {
//       this.router.navigate(['/home']);
//     }
//   }

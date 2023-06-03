import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  startHome() {
    this.router.navigate(['/voting']);
  }

  doLogin() {
    localStorage.setItem('nim', this.form.nim);
    localStorage.setItem('password', this.form.password);

    this.router.navigate(['/user']);
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
// }

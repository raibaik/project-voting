import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/voting',
    pathMatch: 'full',
  },
  {
    path: 'loginpage',
    loadChildren: () =>
      import('./pages/voting/voting.module').then((m) => m.VotingPageModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'voting',
    loadChildren: () => import('./pages/voting/voting.module').then( m => m.VotingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserPageModule)
  },
  {
    path: 'votings',
    loadChildren: () => import('./pages/votings/votings.module').then( m => m.VotingsPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./pages/result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'dasboard',
    loadChildren: () => import('./pages/dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
  {
    path: 'list-peserta',
    loadChildren: () => import('./pages/list-peserta/list-peserta.module').then( m => m.ListPesertaPageModule)
  },
  {
    path: 'create-peserta',
    loadChildren: () => import('./pages/create-peserta/create-peserta.module').then( m => m.CreatePesertaPageModule)
  },
  {
    path: 'create-candidat',
    loadChildren: () => import('./pages/create-candidat/create-candidat.module').then( m => m.CreateCandidatPageModule)
  },
  { 
    path: 'list-candidat',
    loadChildren: () => import('./pages/list-candidat/list-candidat.module').then( m => m.ListCandidatPageModule)
  },
  {
    path: 'update-candidat',
    loadChildren: () => import('./pages/update-candidat/update-candidat.module').then( m => m.UpdateCandidatPageModule)
  },
  {
    path: 'update-peserta',
    loadChildren: () => import('./pages/update-peserta/update-peserta.module').then( m => m.UpdatePesertaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'voting',
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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./admin/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./admin/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./admin/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'add-peserta',
    loadChildren: () => import('./admin/add-peserta/add-peserta.module').then( m => m.AddPesertaPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./admin/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: 'dasboard',
    loadChildren: () => import('./admin/dasboard/dasboard.module').then( m => m.DasboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

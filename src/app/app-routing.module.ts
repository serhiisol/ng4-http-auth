import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicGuard, ProtectedGuard } from 'ng4-auth';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [ PublicGuard ],
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'dashboard',
    canActivate: [ ProtectedGuard ],
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

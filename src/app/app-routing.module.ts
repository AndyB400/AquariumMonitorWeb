import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_gaurds/auth.guard';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AquariumDetailComponent } from './dashboard/aquarium-detail/aquarium-detail.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aquarium/:id', component: AquariumDetailComponent, canActivate: [AuthGuard] },
  
  { path:'**'   , component: DashboardComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
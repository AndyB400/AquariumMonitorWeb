import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_gaurds/auth.guard';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AquariumDetailComponent } from './dashboard/aquarium-detail/aquarium-detail.component';
import { AquariumNewComponent } from './dashboard/aquarium-new/aquarium-new.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aquarium/:id', component: AquariumDetailComponent, canActivate: [AuthGuard] },
  { path: 'aquarium', component: AquariumNewComponent, canActivate: [AuthGuard] },
  { path:'**'   , component: DashboardComponent, canActivate: [AuthGuard]  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
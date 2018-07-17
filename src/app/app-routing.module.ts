import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AquariumDetailComponent } from './dashboard/aquarium-detail/aquarium-detail.component';
import { AquariumNewComponent } from './dashboard/aquarium-new/aquarium-new.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aquarium/:id', component: AquariumDetailComponent },
  { path: 'aquarium', component: AquariumNewComponent },
  { path:'**'   , component: DashboardComponent  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
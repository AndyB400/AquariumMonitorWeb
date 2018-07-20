import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';

import { UserRoutes } from './user.routes';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [ProfileComponent]
})
export class UserModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AquariumDetailComponent } from './aquarium-detail/aquarium-detail.component';
import { AquariumTileComponent } from '../dashboard/aquarium-tile/aquarium-tile.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent],
  exports: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent]
})
export class DashboardModule { }

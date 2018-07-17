import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AquariumDetailComponent } from './aquarium-detail/aquarium-detail.component';
import { AquariumTileComponent } from '../dashboard/aquarium-tile/aquarium-tile.component';
import { AquariumNewComponent } from './aquarium-new/aquarium-new.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent, AquariumNewComponent, DeleteModalComponent],
  exports: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent, DeleteModalComponent],
  entryComponents: [DeleteModalComponent]
})
export class DashboardModule { }

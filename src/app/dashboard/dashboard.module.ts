import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AquariumDetailComponent } from './aquarium-detail/aquarium-detail.component';
import { AquariumTileComponent } from '../dashboard/aquarium-tile/aquarium-tile.component';
import { AquariumNewComponent } from './aquarium-new/aquarium-new.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { AquariumNotFoundComponent } from './aquarium-not-found/aquarium-not-found.component';
import { AquariumExistsActivator } from '../_gaurds/aquarium-exists-activator';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent, AquariumNewComponent, DeleteModalComponent, AquariumNotFoundComponent],
  exports: [DashboardComponent, AquariumTileComponent, AquariumDetailComponent, DeleteModalComponent],
  entryComponents: [DeleteModalComponent],
  providers: [AquariumExistsActivator]
})
export class DashboardModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AquariumTileComponent } from './aquarium-tile/aquarium-tile.component';
import { AquariumDetailComponent } from './aquarium-detail/aquarium-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AquariumTileComponent,
    AquariumDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

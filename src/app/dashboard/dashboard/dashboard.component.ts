import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AquariumService } from '../../services/aquarium-service/aquarium.service';
import { Aquarium } from '../../models/aquarium';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  aquariums: Aquarium[];

  constructor(private route: ActivatedRoute,
    private location: Location,
    private aquariumService: AquariumService) { }

  ngOnInit() {
    this.getAquariums();
  }

  getAquariums(): void {
    this.aquariumService.getAquariums()
      .subscribe(aquariums => this.aquariums = aquariums);
  }
}

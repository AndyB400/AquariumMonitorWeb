import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../models/aquarium';
import { AquariumService } from '../aquarium-service/aquarium.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  aquariums: Aquarium[];
  selectedAquarium: Aquarium;

  onSelect(aquarium: Aquarium): void {
    this.selectedAquarium = aquarium;
  }

  constructor(private aquariumService: AquariumService) { }

  ngOnInit() {
    this.getAquariums();
  }

  getAquariums(): void {
    this.aquariums = this.aquariumService.getAquariums();
  }
}

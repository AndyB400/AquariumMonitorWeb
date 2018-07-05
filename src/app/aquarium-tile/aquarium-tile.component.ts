import { Component, OnInit } from '@angular/core';
import { Aquarium } from '../models/aquarium';

@Component({
  selector: 'aquarium-tile',
  templateUrl: './aquarium-tile.component.html',
  styleUrls: ['./aquarium-tile.component.css']
})
export class AquariumTileComponent implements OnInit {
  aquarium: Aquarium = {
    id: 1,
    name:'lounge',
    volume:200,
    type: 'Tropical'
  };

  constructor() { }

  ngOnInit() {
  }
}
